const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connecting to the database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/media/comics/", require("./routes/media/comics"));
app.use("/api/media/movies/", require("./routes/media/movies"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`hello port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("samira modon");
});
