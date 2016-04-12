'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Media', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      
      work_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      media_type: DataTypes.STRING,
      link: DataTypes.TEXT,
      position: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      mediadescription: DataTypes.STRING,
      work_department: DataTypes.STRING,
      skills_used: DataTypes.STRING

    },
    {
      tableName: 'user_works_media',
      timestamps: false,
      paranoid: false,
    }
  );
}


