const fs = require("fs");
const path = require("path");

module.exports = () => {
  // Adjust path to where your images are stored, relative to this file!
  const imgDir = path.join(__dirname, "../assests/images");
  return fs.readdirSync(imgDir).filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );
};
