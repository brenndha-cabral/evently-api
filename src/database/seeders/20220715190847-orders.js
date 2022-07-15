module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [{
        user_id: 1,
        event_id: 2,
        status: 'ended',
      },
      {
        user_id: 1,
        event_id: 1,
        status: 'active',
      },
      {
        user_id: 1,
        event_id: 2,
        status: 'active',
      },
      {
        user_id: 2,
        event_id: 1,
        status: 'canceled',
      },
      {
        user_id: 2,
        event_id: 2,
        status: 'ended',
      },
      ],
      {
        timestamps: false,
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
