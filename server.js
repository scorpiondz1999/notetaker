const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
