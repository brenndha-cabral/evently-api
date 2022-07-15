/* eslint-disable max-lines-per-function */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        field: 'user_id',
      },
      eventId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
        field: 'event_id',
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('active', 'canceled', 'ended'),
        defaultValue: 'active',
      },
      created: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
