const express = require("express");
const path = require("path");
const ConnectToDataBase = require("../server/database/connect");
const app = express();
const port = process.env.PORT || 5000;
const UserModel = require("./models/UserModel");
const cors = require("cors");
require("dotenv").config();

ConnectToDataBase();
app.use(cors());

app.use(express.static(path.join(__dirname, "../client")));

app.get("/api/Dashboard", async (req, res) => {
  const users = await UserModel.find();
  res.sendFile(
    path.join(__dirname, "../client", "index.html"),
    res.json({ users })
  );
});
app.get("*", async (req, res) => {
  const user = await UserModel.find();

  res.sendFile(path.join(__dirname, "../client", "index.html"), { user });
});
app.get("/Dashboard", async (req, res) => {
  const users = await UserModel.find();
  res.json({ users });
});

app.delete("/api/user/:_id", async (req, res) => {
   const { _id } = req.params
  try {
    await UserModel.deleteOne({ _id })
    res.status(200).send()
  } catch (error) {
    console.log(error)
    res.send(error)
  }
  
})

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
