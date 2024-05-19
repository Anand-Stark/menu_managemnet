const express = require('express');
const router = express.Router();
const { createCategory, getCategories, getCategoryById, updateCategory } = require('../controllers/categoryController');

router.post('/category', createCategory);
router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.put('/category/:id', updateCategory);

module.exports = router;
