const fs = require("fs");
const path = require("path");

module.exports = () => {
  const imgDir = path.join(__dirname, "../assets/images"); // adjust path if needed
  const images = fs.readdirSync(imgDir).filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  // Pick a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Export both the list and the random image
  return {
    all: images,
    random: randomImage
  };
};
