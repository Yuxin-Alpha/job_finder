const express = require("express");
const mongoose = require("mongoose")
// connect the database
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
  console.log('mongo connect success');
})

// new app
let app = express();

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(8080, () => {
  console.log("server is running on 8080")
})