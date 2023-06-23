const express = require('express');
const morgan = require('morgan');

function expressConfig(app) {
  // плагины - миддлварки

  // логирование запросов
  app.use(morgan('dev'));

  // парсинг тела пост-запроса из формы
  app.use(express.urlencoded({ extended: true }));

  // миддлварка для отправки фечей с клиента в формате JSON
  app.use(express.json()); // тело запроса, распарсить => req.body

  // настраиваем статические файлы из папки public
  // app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = expressConfig;
