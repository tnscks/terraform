module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "size", {
      type: Sequelize.ARRAY(Sequelize.JSON),
      unique: false,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("posts", "size");
  },
};
