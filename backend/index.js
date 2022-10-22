const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
dotenv.config({ path: "./config/config.env" });
const routes = require("./routes");
const app = express();
const connectDB = require("./db");

const PORT = process.env.PORT || 5000;

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1", routes);

// We want to have route for the route that will load the build folder's index.html
if (process.env.NODE_ENV === "production") {
  // We set the static folder
  app.use(express.static("../frontend/build"));
  // For any other route we will send the index.html file
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
}

app.listen(PORT, (_req, _res) => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  );
  connectDB();
});
