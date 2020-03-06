const Document = require('../models/document');

class DocumentService {
    constructor() {}
    static async getByTitle(title) {
        return Document.findOne({title: title});
    }

    static async getAllDocuments() {
        return Document.find({}, {title: 1});
    }

    static async getLinkedDocument(title) {

        let Document = await this.getByTitle(title);
        let text = Document.text;

        const link = /\[\[([^\[\]]+?)(?:\|(.+?))?\]\]/g;

        const isRedirect = (text) => {
            return ['#redirect', '#넘겨주기'].some((s) => {
                text.toLowerCase().indexOf(s);
            });
        };

        const removeTag = (title) => {
            const index = title.indexOf('#s-');
            return index < 0 ? title : title.substring(0, index);
        };

        const isExternal = (title) => {
            return /^https?:\/\//.test(title)
        };

        const namespacePrefix = {
            '1': '틀:',
            '2': '분류:',
            '3': '파일:',
            '4': '사용자:',
            '6': '나무위키:'
        };

        if (isRedirect(text)) {
            const title = text.substring(text.indexOf(' ') + 1)
            return [removeTag(title).trim()]
        }

        const links = [];
        text.replace(link, (match, href, value) => {
            if (isExternal(href))
                return;
            if (href.startsWith('파일:'))
                return;
            if (href.startsWith(':분류:'))
                href = href.substring(1);

            links.push(removeTag(href));
        });

        return links;
    }
}

module.exports = DocumentService;