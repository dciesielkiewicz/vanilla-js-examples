const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
  console.log(`Vanilla JS Examples app listening on port ${port}`)
})
