const express = require("express");
const mongoose = require("mongoose");
const app = express();
const requireDir = require("require-dir");
const port = 3000;

//Conectando o banco Mongo
mongoose.connect("mongodb://localhost:27017/register", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.json());

requireDir("./models");

const Register = mongoose.model("Register");

app.use("/api", require("./routes/registerRoutes"));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
