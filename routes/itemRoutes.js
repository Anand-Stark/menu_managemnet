const express = require('express');
const router = express.Router();
const { createItem, getItems, getItemById, updateItem, searchItemByName } = require('../controllers/itemController');

router.post('/item', createItem);
router.get('/items', getItems);
router.get('/item/:id', getItemById);
router.put('/item/:id', updateItem);
router.get('/item/search/:name', searchItemByName);

module.exports = router;
