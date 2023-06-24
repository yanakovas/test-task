const documentsRouter = require('express').Router();

const { Document } = require('../db/models');

documentsRouter.get('/', async (req, res) => {
  try {
    const documents = await Document.findAll({
      order: [
        ['createdAt', 'DESC'],
        ['id', 'DESC'],
      ],
    });

    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Непредвиденная ошибка сервера' });
  }
});

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

documentsRouter.delete('/delete', async (req, res) => {
  try {
    console.log('req.body', req.body, typeof req.body);

    const removedCount = await Document.destroy({
      where: {
        id: req.body,
      },
    });
    console.log(removedCount);
    if (removedCount === 0) {
      res.status(404).json({ success: false, message: 'Нет такого документа' });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Непредвиденная ошибка сервера' });
  }
});

module.exports = documentsRouter;
