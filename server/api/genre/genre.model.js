'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      genre_name: DataTypes.STRING,
    },
    {
      tableName: 'genres',
      timestamps: false,
      paranoid: false,
    }
  );
}
