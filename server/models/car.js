const mongoose      = require('mongoose');

let carSchema = new mongoose.Schema({
    brand: { type: String, required: true, maxlength: 80 },
    model: { type: String, required: true, maxlength: 80 },
    extraInfo: Array // array de objetos<fieldName,valueField>
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = carSchema;
