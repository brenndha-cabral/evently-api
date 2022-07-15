module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Events',
      [{
        title: 'Post do Ano',
        description: 'Melhor post do ano',
        date: new Date('2011-08-01T19:58:00.000Z'),
        value: 135.79,
        address: 'Av John Doe, 123, São Paulo',
        image: `https://upload.wikimedia.org/
        wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg`,
        qtd_ticket: 300,
      },
      {
        title: 'Vamos que vamos',
        description: 'Foguete não tem ré',
        date: new Date('2011-08-01T19:58:00.000Z'),
        value: 118.90,
        address: 'Av John Doe, 123, São Paulo',
        image: `https://upload.wikimedia.org/
        wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg`,
        qtd_ticket: 120,
      },
      ],
      {
        timestamps: false,
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};
