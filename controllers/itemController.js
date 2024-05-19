const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    const { name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, category, subcategory } = req.body;
    try {
        const item = new Item({ name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, category, subcategory });
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category').populate('subcategory');
        res.json(items);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('category').populate('subcategory');
        res.json(item);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.updateItem = async (req, res) => {
    const { name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, category, subcategory } = req.body;
    try {
        let item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });

        item.name = name;
        item.image = image;
        item.description = description;
        item.taxApplicability = taxApplicability;
        item.tax = tax;
        item.baseAmount = baseAmount;
        item.discount = discount;
        item.totalAmount = totalAmount;
        item.category = category;
        item.subcategory = subcategory;

        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.searchItemByName = async (req, res) => {
    try {
        const items = await Item.find({ name: new RegExp(req.params.name, 'i') }).populate('category').populate('subcategory');
        res.json(items);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
