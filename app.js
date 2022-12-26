const express = require('express');
const compress_route = require ('./routes/compress_route')

const app = express();

const PORT = 4000;

app.use('/api/v1', compress_route)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});