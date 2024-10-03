import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import clientRoutes from "./routes/client/index.route";

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

// client router
clientRoutes(app);
// end client router

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
