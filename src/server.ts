// Importar o express, o helmet e a função router para criação dos endpoints
import express from "express";
import helmet from "helmet";
import router from "./routes";

// Criar o server e atribuir o número da porta a uma variável chamada port
const server = express();
const port = 3000;

// Utilizar o helmet para proteção ao nosso servidor
server.use(helmet());
// Dizer ao nosso servidor que só trabalhamos com JSON
server.use(express.json());

// O servidor intrepetar formatos URL-encoded que parece json mas não é
server.use(express.urlencoded({ extended: true }));

// Os nossos endpoints
server.use("/", router);

// Atribuir o servidor a uma porta
server.listen(port, () => {
  console.log("Server ligado no http://localhost:3000");
});
