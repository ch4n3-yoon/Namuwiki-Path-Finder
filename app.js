const loaders = require('./loaders');
const NavigationService = require('./services/navigation');

async function app() {
    await loaders();
    // NavigationService('', '');
}

app();
