const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
    issuedTo: String,
    degree: String,
    year: Number,
    verified: Boolean
});

module.exports = mongoose.model('Credential', credentialSchema);
