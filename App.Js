const express = require('express');
const routes = require('./Classes.Js');
const app=express();
const port = process.env.PORT || 8000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", routes);

app.listen(port,()=>console.log("Server is running..."));