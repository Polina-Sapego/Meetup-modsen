const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: {
        name: process.env.DB_NAME || 'db',
        user: process.env.DB_USER || 'test',
        pass: process.env.DB_PASS || '123',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5555'
    }
    
};