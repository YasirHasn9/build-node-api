import dotenv from "dotenv";
dotenv.config();
import express from "express";
import config from "config";
import connect from "./db/connect";
import routes from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server Listening at http://${host}:${port}`);
  connect();
  routes(app);
});
