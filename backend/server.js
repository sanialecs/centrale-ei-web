const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const routeNotFoundJsonHandler = require("./services/routeNotFoundJsonHandler");
const jsonErrorHandler = require("./services/jsonErrorHandler");

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(routeNotFoundJsonHandler);
app.use(jsonErrorHandler);

const port = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
