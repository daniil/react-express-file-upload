const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const { readImagesFile, writeImagesFile } = require('./utils/jsonUtils');
const app = express();
const PORT = 5050 || process.env.PORT;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'public/images');
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

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

app.get('/image-gallery', (_req, res) => {
  const images = readImagesFile();
  res.status(200).json(images);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});