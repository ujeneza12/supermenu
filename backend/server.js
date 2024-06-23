const express = require("express");
const morgan= require("morgan");


const cors = require("cors");
const userRouter = require("./routes/users");
const userAuth = require("./routes/auth")

const app = express();
app.use(cors());
app.use(morgan('short'))
app.use(express.json());
app.use("/books", userRouter);
app.use("/auth",userAuth);

require("./swagger-setup")(app);

app.listen(8081, () => {
  console.log("listening");
});
