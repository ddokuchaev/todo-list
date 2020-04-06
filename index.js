const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./utils/database");
const todoRouter = require("./routes/todo");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
//парсинг JSON
app.use(express.json());
//подключение роута todo
app.use("/api/todo", todoRouter);

app.use((req, res, next) => {
  res.sendFile("/index.html");
});

async function start() {
  try {
    //await sequelize.sync({ force: true }); //очистка БД
    await sequelize.sync(); //очистка БД
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();
console.log("Server start on PORT :", PORT);
