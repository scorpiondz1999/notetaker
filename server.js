const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const getNotes = require("./db/db.json");
app.get("/api/notes", (req, res) => {
  res.json(getNotes.slice(1));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuid();

  getNotes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(getNotes, null, 2)
  );
  res.json(newNote);
});













app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
