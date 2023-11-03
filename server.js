const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
import cloudinary from "cloudinary";
dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("BD CONNECTION ERROR", err));
//API request
app.use(morgan("dev"));
//resolve Frontend and Backend
app.use(
  cors({
    origin: "*",
  })
);
//Cloudinary Config
cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Cloud_key,
  api_secret: process.env.Cloud_Secret,
});
//Request Limit
app.use(bodyparser.json({ limit: "5mb" }));
//Routes

fs.readdirSync("./api/routes").map((file) => {
  app.use("/api", require(`./api/routes/${file}`).default);
});

const port = process.env.PORT || 8000;

app.listen(port, console.log(`SERVER IS RUNNING ON ${port}`));
