const express = require("express");
const app = express();

const userRouter = require("./routers/user");

app.use(userRouter);
app.use(express.json());

app.listen(3005, () => {
  console.log(`listening on port ${3005}`);
});
