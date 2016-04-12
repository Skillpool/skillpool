'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  mysql: {
    connectionLimit : 100, //important
     host     : 'localhost',
     username : 'root',
     password : '',
     database : 'Skillpool_new',
     debug    :  true,
     options : {
      host: 'localhost',
      dialect: 'mysql'
     }
  },

  

  // Seed database on startup
  seedDB: false

};
