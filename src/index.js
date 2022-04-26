require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");

const cors = require("cors");

const dummyController = require("./controllers/dummy.controller");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", dummyController);

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
