'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Thing', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      number: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    },
    {
      tableName: 'thing',
      timestamps: true,
      paranoid: true,
    }
  );
}
