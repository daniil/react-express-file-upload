const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const app = express();
const PORT = 5050 || process.env.PORT;

const readImagesFile = () => {
  const images = fs.readFileSync('./data/images.json', 'utf-8');
  return JSON.parse(images);
}

const writeImagesFile = (content) => {
  fs.writeFileSync('./data/images.json', JSON.stringify(content));
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'public/images');
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.static('/public'));
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.post('/upload-image', upload.single('imageFile'), (req, res) => {
  const images = readImagesFile();
  const newImage = {
    id: uuid(),
    title: req.body.imageTitle,
    description: req.body.imageDescription,
    src: `/images/${req.file.filename}`
  };
  images.unshift(newImage);
  writeImagesFile(images);
  res.status(201).json(newImage);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});