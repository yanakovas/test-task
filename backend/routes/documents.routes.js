const documentsRouter = require('express').Router();

const { Document } = require('../db/models');

documentsRouter.get('/document1', async (req, res) => {
  try {
    const document1 = await Document.findOne({
      where: { id: 1 },
    });

    res.json(document1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Непредвиденная ошибка сервера' });
  }
});

documentsRouter.get('/document2', async (req, res) => {
  try {
    const document2 = await Document.findOne({
      where: { id: 2 },
    });

    res.json(document2);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Непредвиденная ошибка сервера' });
  }
});

// documentsRouter.post('/', async (req, res) => {
//   const suggestion = await Document.create({
//     title: req.body.title,
//     name: req.body.name,
//     text: req.body.text,
//   });

//   res.json(suggestion);
// });

module.exports = documentsRouter;
