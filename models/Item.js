const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: false },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    baseAmount: { type: Number, required: false },
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: false },
    category: { type: String},
    subcategory: { type: String}
});

module.exports = mongoose.model('Item', ItemSchema);
