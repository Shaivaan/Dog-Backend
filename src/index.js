require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");

const cors = require("cors");

const dummyController = require("./controllers/dummy.controller");

const app = express();
app.use(express.json());
app.use(cors());

const {register,login} = require("./controllers/adminAuth.controller");
const {userregister,userlogin} = require("./controllers/userAuth.controller");
const listController = require("./controllers/list.controller");
const petController = require("./controllers/pet.controller");
const bookingController = require("./controllers/booking.controller");


app.use("/", dummyController);
app.post("/register",register);
app.post("/login",login);
app.post("/userregister",userregister);
app.post("/userlogin",userlogin);
app.use("/list",listController);
app.use("/pet",petController);
app.use("/booking",bookingController);




const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
