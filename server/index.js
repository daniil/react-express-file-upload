const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 5050 || process.env.PORT;

const readImages = () => {
  const images = fs.readFileSync('./data/images.json', 'utf-8');
  return JSON.parse(images);
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'public/images');
  },
  filename: function (_req, file, cb) {
    cb(
      null,
      Date.now() + file.originalname
    );
  },
});

const upload = multer({ storage });

app.use(express.static('/public'));
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.post('/upload-image', upload.single('imageFile'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});