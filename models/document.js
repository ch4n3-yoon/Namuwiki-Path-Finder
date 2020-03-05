const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    namespace: {
        type: String,
    },
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    contributors: {
        type: String,
    },
});

module.exports = mongoose.model('Document', DocumentSchema, 'namuwiki');