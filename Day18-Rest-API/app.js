const express = require('express');
const app = express();
const port = 3000;




app.get('/user', (req, res)=> {
  res.status(200);
  res.send('Test path user & status 200');
});

app.get('/api', (req, res)=> {
  res.status(401).send('please contact administrator');
})


app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
});