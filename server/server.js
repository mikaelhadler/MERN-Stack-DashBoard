const express = require("express");
const ConnectToDataBase = require("../server/database/connect");
const app = express();
const port = process.env.PORT || 5000;
const UserModel = require("./models/UserModel");
const cors = require("cors");
require("dotenv").config();

ConnectToDataBase();
app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ users });
  } catch (error) {
    res.send(error);
  }
});

app.post("/api/user", async (req, res) => {
  try {
    const payload = req.body;
    if (
      !payload.email &&
      !payload.firstname &&
      !payload.lastname &&
      !payload.password
    ) {
      res
        .status(422)
        .json({ message: "Please provide all the required fields" });
    }
    const userId =  await UserModel.create({ ...payload });
    res.send(userId);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/api/user/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    await UserModel.deleteOne({ _id });
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
