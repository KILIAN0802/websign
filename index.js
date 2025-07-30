const express = require('express')
const path = require('path')
const handlebars =require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public'))); // file tĩnh

// app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'))

app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());
app.use(methodOverride('_method'));


app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers:{
      sum: (a, b) => a + b,
   }
  }),
)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))