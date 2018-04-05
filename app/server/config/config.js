require('dotenv').config();

let apiKeys = {
    googleGeocode: process.env.GOOGLE_GEOCODE_API
};

let mongo = {
    connectionString: process.env.MONGO_CONN_STRING,
    db: process.env.MONGO_DB,
    localdb: process.env.MONGO_LOCAL_CONN
};

module.exports = {
    apiKeys,
    mongo
};