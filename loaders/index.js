const mongooseLoader = require('./mongoose');
const Document = require('../models/document');
const DocumentService = require('../services/document');

module.exports = async () => {
    const mongoConnection = await mongooseLoader();
    console.log('MongoDB Intialized');
    // 테스트
    console.log(await DocumentService.getLinkedDocument('홍진호'));
};