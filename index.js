const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

// DATABASE -> TESTE DE CONEXAO
connection.authenticate()
  .then(()=>{
    console.log("Conexão Feita com o Banco!");
  })
  .catch((msgErro)=>{
    console.log(msgErro);
  });

// MOSTRANDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.set("view engine", "ejs");
app.use(express.static("public"));

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROTAS
app.get("/", (req, res)=>{
  Pergunta.findAll({raw: true}).then(perguntas => {
    res.render("index.ejs",{
      perguntas: perguntas
    });
  });
});

app.get("/perguntar", (req, res)=>{
  res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res)=>{
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(()=>{
    res.redirect("/");
  });
});

app.listen(8000, ()=>{
  console.log("Servidor rodando na 8000");
});