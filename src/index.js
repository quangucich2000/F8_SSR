const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
var methodOverride = require('method-override')
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

//connect to db
db.connect();

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
//console.log(path.join(__dirname, 'public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))

//http logger
//app.use(morgan('combined'))

//template engine
app.engine('.hbs', handlebars({ 
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b,
    },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

//degub warning in packege
// process.on('warning', (warning) => {
//     console.log(warning.stack);
// });