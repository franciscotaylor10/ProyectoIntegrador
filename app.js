var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//sesion es mas vulnerable que la cookie. 
app.use(
  session({
    secret: 'Game Tune',
    resave: false,
    saveUninitialized: true,
  }),
);

//Cookies: tiene resistencia. uno puede cerrar las pestañas de la google y sigue loguada. 
app.use((req, res, next) => {
  if (req.cookies.user && !req.session.user ) {
    // Pone en la sessión lo que está en la cookie SÓLO si la sesión está vacía
    req.session.user = req.cookies.user;
  }
  next();
});

app.use((req, res, next) => {
  if(req.session.user){
    res.locals={
      userlogged:req.session.user
    }
  }else{
    res.locals={
      userlogged:null
    }
  }
  next();
});

//lineas para rutas. QUE ARCHIVOS VOY A USAR DEPENDIENDO QUE ES LO QUE DICE DESPUES DEL LOCAL HOST 3000. 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
