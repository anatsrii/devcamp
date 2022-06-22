const express = require('express');
const app = express;


app.get('/', (req, res)=> {
  res.send('Hello Express');
});

//Custom 404 Page
app.use(function (req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found')
})


app.listen(3000, ()=> {
  console.log('Server start on port 3000');
});

