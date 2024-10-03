import express, { Express, Request, Response } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

// Dotenv
dotenv.config();
// Dotenv

// Database connect
database.connect();
// End Database connect

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Pug
app.set("views", "./views");
app.set("view engine", "pug");
// End Pug

app.get("/topics", (req: Request, res: Response) => {
  res.render("client/pages/topics/index");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
