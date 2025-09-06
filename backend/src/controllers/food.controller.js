const foodModel = require('../models/food.model');
const StorageService = require('../services/storage.service');
const { randomUUID } = require('crypto');
const path = require('path');
async function createFood(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Video file is required" });
        }

        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        const filePath = `food/${randomUUID()}${path.extname(req.file.originalname)}`;
        const uploadResult = await StorageService.uploadFile(req.file.buffer, filePath);

        const foodItem = await foodModel.create({
            foodPartner: req.foodpartner._id,
            name,
            video: uploadResult.url,
            description,
        });

        return res.status(201).json({
            message: "Food created successfully",
            food: foodItem
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
async function getFoodItems(req, res) {
    try {
        const foodItems = await foodModel.find({});
        return res.status(200).json({ foodItems });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
module.exports = {
    createFood
    ,getFoodItems
};