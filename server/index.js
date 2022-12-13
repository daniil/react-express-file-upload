const express = require('express');
const app = express();
const PORT = 5050 || process.env.PORT;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});