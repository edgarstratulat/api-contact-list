import express from "express";
import helmet from "helmet";
import router from "./routes";

const server = express();
const port = 3000;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", router);

server.listen(port, () => {
  console.log("Server ligado no http://localhost:3000");
});
