const newsRouter = require('./news');
const manageRouter = require('./manage');



function route(app){

app.use('/news', newsRouter);
app.use('/', manageRouter); 

  //127.0.0.1 - localhost
}

module.exports =route;