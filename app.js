let express = require('express');
let bodyParser = require('body-parser');
var path = require('path');
require('dotenv').config();

let companyRouter = require('./routers/web.company.router');
let uniboRouter = require('./routers/web.unibo.router');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/company',companyRouter);
app.use('/unibo',uniboRouter);

app.listen(3000);
