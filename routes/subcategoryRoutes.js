const express = require('express');
const router = express.Router();
const { createSubcategory, getSubcategories, getSubcategoryById, updateSubcategory } = require('../controllers/subcategoryController');

router.post('/subcategory', createSubcategory);
router.get('/subcategories', getSubcategories);
router.get('/subcategory/:id', getSubcategoryById);
router.put('/subcategory/:id', updateSubcategory);

module.exports = router;
