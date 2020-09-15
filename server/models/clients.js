const mongoose      = require('mongoose');

let clientSchema = new mongoose.Schema({
    names: { type: String, required: true, maxlength: 250 },
    lastNames: { type: String, required: true, maxlength: 250 },
    streetAddress: { type: String, required: true, maxlength: 250 },
    email: { type: String, required: true, maxlength: 80 },
    extraInfo: Array // array de objetos<fieldName,valueField>
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

let ClientModel = mongoose.model('Client', clientSchema);

module.exports = ClientModel;
