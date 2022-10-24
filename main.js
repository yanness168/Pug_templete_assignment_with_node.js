const express = require('express');
const router = require('./routes');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.use("/",  router);



app.listen(PORT, ()=>console.log("Server is running on port"));
