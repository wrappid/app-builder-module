export const Pages = (sequelize: any, DataTypes: any) => {
  const pages = sequelize.define("Pages", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    entityRef: {
      type: DataTypes.STRING,
      unique: true,
    },
    noScroll: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    appComponent: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    },
    schema: {
      type: DataTypes.JSONB,
      defaultValue: {},
    },
    extraInfo: {
      type: DataTypes.JSONB,
      defaultValue: {},
    },
    commitId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
    },
    _status: {
      type: DataTypes.STRING,
      defaultValue: "new",
    },
    comments: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  pages.associate = (models: any) => {
    pages.hasMany(models.Routes, {
      foreignKey: "pageRef",
      sourceKey: "entityRef",
    });
    pages.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    pages.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    pages.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return pages;
};
