const mongoose      = require('mongoose');

let userSchema = new mongoose.Schema({
    username: { type: String, required: true, maxlength: 60 },
    password: String,
    api_token: { type: String, required: false, maxlength: 80 }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

let UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
