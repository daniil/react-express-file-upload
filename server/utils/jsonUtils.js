const fs = require('fs');

const readImagesFile = () => {
  const images = fs.readFileSync('./data/images.json', 'utf-8');
  return JSON.parse(images);
}

const writeImagesFile = (content) => {
  fs.writeFileSync('./data/images.json', JSON.stringify(content));
}

module.exports = {
  readImagesFile,
  writeImagesFile
}