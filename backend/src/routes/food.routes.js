const  express = require('express');
const foodController = require('../controllers/food.controller');
const { authFoodPartnerMiddleware : authfood, authUserMiddleware } = require('../middleware/auth.middleware');
const router = express.Router();
const multer = require('multer');
const upload  = multer({
    storage: multer.memoryStorage()
})

router.post('/',
     authfood,upload.single("video"), 
     foodController.createFood);
router.get("/",
    authUserMiddleware
    ,foodController.getFoodItems
)
module.exports = router; 