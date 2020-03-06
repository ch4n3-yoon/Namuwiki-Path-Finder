const Document = require('../models/document');

class NavigationService {
    constructor(source, destination) {
        const sourceDocument = this.getByTitle(source);
        const destinationDocument = this.getByTitle(destination);
        if (!sourceDocument || !destinationDocument) {
            console.log('Document Not Found');
        }
    }

    static async getByTitle(title) {
        return Document.findOne({'title': title}, {title: 1});
    }
}

module.exports = NavigationService;