const express = require('express');
const app = express();

const todorouter = require('./routes/todo')
const { sequelize } = require('./models');

const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
  });

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/todos', todorouter);

sequelize
  .sync({ force: true }) // force : true -> 서버 실행때마다 테이블 재생성(데이터 다 날아감), false -> 서버 실행 시 테이블 없으면 생성
  .then(() => {
    app.listen(port, () => {
      console.log('database connection succeed');
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
