const mongooseLoader = require('./mongoose');
const Document = require('../models/document');
const DocumentService = require('../services/document');

module.exports = async () => {
    const mongoConnection = await mongooseLoader();
    console.log('MongoDB Intialized');
    console.log(await DocumentService.getByTitle('%2A뮤트'));

};