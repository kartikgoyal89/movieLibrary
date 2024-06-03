const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/db");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan("dev"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/movie", require("./routes/movieRoutes"));
app.use("/api/cast", require("./routes/castRoutes"));
app.use("/api/crew", require("./routes/crewRoutes"));

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`.bgMagenta.bold);
});
