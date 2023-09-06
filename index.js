const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// MOSTRANDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.set("view engine", "ejs");
app.use(express.static("public"));

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROTAS
app.get("/", (req, res)=>{
  res.render("index.ejs");
});

app.get("/perguntar", (req, res)=>{
  res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res)=>{
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;

  res.send(`formulário recebido! | titulo: ${titulo} descricao: ${descricao}`);
});

app.listen(8000, ()=>{
  console.log("Servidor rodando na 8000");
});