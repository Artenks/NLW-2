//Servidor
const express = require("express");
const server = express();

const { pageLanding, pageGiveClasses, pageStudy, saveClasses, studyTutorial, giveClassesTutorial } = require("./pages");

//configurar nunjucks(template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
  //Configurar arquvios estáticos (css, scripts, imagens)
  .use(express.static("public"))
  //Rotas da aplicação)
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .get("/study-tutorial", studyTutorial)
  .get("/give-classes-tutorial", giveClassesTutorial)
.post("/save-classes", saveClasses)
  //Start no servidor
  .listen(5500);
