import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import clientRoutes from "./routes/client/index.route";
import session from "express-session";
import flash from "connect-flash";
import bodyParser = require("body-parser");

// Dotenv
dotenv.config();

// Database connect
database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Thiết lập session
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// express-messages middleware
app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Cấu hình file tĩnh
app.use(express.static("public"));

// Pug
app.set("views", "./views");
app.set("view engine", "pug");

// client router
clientRoutes(app);

// Server listening
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
