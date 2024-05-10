require('dotenv').config()
const fs = require('fs')
module.exports = {
  "development": {
    "username": "BinarAcademy",
    "password": "6r6-mQjEflEcVrhpJzvosA",
    "database": "bingle-shop",
    "host": "binar-academy-6764.6xw.aws-ap-southeast-1.cockroachlabs.cloud",
    "port": "26257",
    "dialect": "postgres",
    dialectOptions: { ssl: { require: true, rejectUnauthorized: true, ca: fs.readFileSync(__dirname + '/root.crt').toString(), } }
  },
  "test": {
    "username": "postgres",
    "password": "SuperAdmin",
    "database": "binar_platinum_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    logging: false,
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
