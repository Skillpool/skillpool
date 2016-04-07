'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/skillpool-test'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  },
  mysql: {
    connectionLimit : 100, //important
     host     : 'localhost',
     username     : 'root',
     password : '',
     database : 'database',
     debug    :  true,
     options : {
      host: 'localhost',
      dialect: 'mysql'
     }
  }
};
