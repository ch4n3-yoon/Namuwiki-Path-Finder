const loaders = require('./loaders');

async function startServer() {

    await loaders();

}

startServer();
