const cloudinary = require("cloudinary").v2;
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_NAME || "",
  api_key: process.env.CLOUDINARY_KEY || "",
  api_secret: process.env.CLOUDINARY_SECRET || "",
});

async function deletePreviousImage(imageId) {
  return await cloudinary.uploader.destroy(`${imageId}`);
}

module.exports = {
  deletePreviousImage,
};
