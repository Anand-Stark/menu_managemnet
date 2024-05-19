const Category = require('../models/Category');

exports.createCategory = async (req, res) => {

    console.log("name is" + req.body.name);

    const { name, image, description, taxApplicability, tax, taxType } = req.body;
    try {
        const category = new Category({ name, image, description, taxApplicability, tax, taxType });
        await category.save();
        res.json(category);
    } catch (err) {
        res.status(500).send('Server Error ');
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.updateCategory = async (req, res) => {
    const { name, image, description, taxApplicability, tax, taxType } = req.body;
    try {
        let category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ msg: 'Category not found' });

        category.name = name;
        category.image = image;
        category.description = description;
        category.taxApplicability = taxApplicability;
        category.tax = tax;
        category.taxType = taxType;

        await category.save();
        res.json(category);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
