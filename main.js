const createError = require('http-errors');
const express = require('express');
const router = require('./routes');
const studentRouter = require('./studentRouter.js')
const courseRouter = require('./courseRouter.js')
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.use("/",  router);
app.use('/fstudent', studentRouter);
app.use('/fcourse', courseRouter);

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


app.listen(PORT, ()=>console.log("Server is running on port"));
