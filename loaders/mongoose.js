const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async () => {
    const connection = mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    const handleOpen = () => console.log("➡️ connected to DB");
    const handleError = (err) => console.log(`❌ Error on DB Connection : ${err}`);
    const db = mongoose.connection;
    db.once("open", handleOpen);
    db.on("error", handleError);
    return db;
};
