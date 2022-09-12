const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3003;
const attractions = require('./routes/attractions');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/all-attractions', attractions);





app.listen(port, ()=> {console.log(`Server running on port ${port}`)});


