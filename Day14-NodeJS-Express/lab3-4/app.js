const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/data', (req, res) => {
 res.render('result', { dataResult: `result from ${req.query.name}` });
});

app.listen(3000, () => {
 console.log('server started on port 3000!');
});
