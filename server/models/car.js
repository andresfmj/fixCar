const mongoose      = require('mongoose');

const fixesSchema = new mongoose.Schema({
    "observ": { type: String, required: true, maxlength: 250 },
    extraInfo: Array
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

let carSchema = new mongoose.Schema({
    brand: { type: String, required: true, maxlength: 80 },
    model: { type: String, required: true, maxlength: 80 },
    fixes: [fixesSchema],
    extraInfo: Array // array de objetos<fieldName,valueField>
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = carSchema;
