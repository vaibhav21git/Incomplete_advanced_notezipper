const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Userroutes = require("./routes/Userroutes");
const { notFound, errorHandler } = require("./middlewares/Errormiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

// res.json and res.send are executing like same way returning the json
//added

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id == req.params.id);
  res.send(note);
});

app.use("/api/users", Userroutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
