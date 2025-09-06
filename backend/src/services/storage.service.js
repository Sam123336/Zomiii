const ImageKit = require("imagekit");
const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMGEKIT_URL_ENDPOINT
});
// /2gouy7ne7/
async function uploadFile (file,fileName){
    const result  = await imagekit.upload({
        file : file,
        fileName : fileName
    });
    return result;

}

module.exports = {
    uploadFile
}