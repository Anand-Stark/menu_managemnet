const Subcategory = require('../models/Subcategory');

exports.createSubcategory = async (req, res) => {
    const { name, image, description, taxApplicability, tax, category } = req.body;

    try {
        const subcategory = new Subcategory({ name, image, description, taxApplicability, tax, category });
        console.log(subcategory);
        await subcategory.save();
        res.json(subcategory);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.find().populate('category');
        res.json(subcategories);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getSubcategoryById = async (req, res) => {
    try {
        const subcategory = await Subcategory.findById(req.params.id).populate('category');
        res.json(subcategory);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.updateSubcategory = async (req, res) => {
    const { name, image, description, taxApplicability, tax, category } = req.body;
    try {
        let subcategory = await Subcategory.findById(req.params.id);
        if (!subcategory) return res.status(404).json({ msg: 'Subcategory not found' });

        subcategory.name = name;
        subcategory.image = image;
        subcategory.description = description;
        subcategory.taxApplicability = taxApplicability;
        subcategory.tax = tax;
        subcategory.category = category;

        await subcategory.save();
        res.json(subcategory);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
