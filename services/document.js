const Document = require('../models/document');

class DocumentService {
    constructor() {}
    static async getByTitle(title) {
        return Document.findOne({'title': title}, {title: 1});
    }
}

module.exports = DocumentService;