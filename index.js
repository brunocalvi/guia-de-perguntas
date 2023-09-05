const express = require("express");
const app = express();

// MOSTRANDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.render("index");
});

app.get("/perguntar", (req, res)=>{
  res.render("perguntar");
});

app.listen(8000, ()=>{
  console.log("Servidor rodando na 8000");
});