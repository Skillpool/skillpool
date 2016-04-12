/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  /*sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)*/
  sequelize: new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql.options)
};

// Insert models below
db.Genre = db.sequelize.import('../api/genre/genre.model'); db.Genre.sync();
db.Media = db.sequelize.import('../api/media/media.model'); db.Media.sync();
db.Thing = db.sequelize.import('../api/thing/thing.model'); db.Thing.sync();
db.User = db.sequelize.import('../api/user/user.model');
db.User.sync();


module.exports = db;
