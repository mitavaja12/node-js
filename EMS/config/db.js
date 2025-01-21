const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('connected MongoDB');
    } catch (error) {
        console.error('DB error:', error.message);
    }
};

module.exports = DBconnect;