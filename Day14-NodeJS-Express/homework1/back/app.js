const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());



app.get('/api/articles', (req, res)=> {
  res.json([
    {
      Title: "Football",
      Content: "This is football content",
      Create_Date: "2022-06-18"
    },
    {
      Title: "News",
      Content: "This is news content",
      Create_Date: "2022-06-19"
    },
    {
      Title: "Cat",
      Content: "This is cat content",
      Create_Date: "2022-06-20"
    },

  ]);
});



app.listen(3000, ()=> {
  console.log(" Server start on port 3000");
});
