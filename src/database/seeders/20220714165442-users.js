module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [{
        name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        password: '123456',
        image: `https://upload.wikimedia.org/
        wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg`,
        adm: true,
      },
      {
        name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        password: '123456',
        image: `https://sportbuzz.uol.com.br/
        media/_versions/gettyimages-52491565_widelg.jpg`,
        adm: false,
      },
      ],
      {
        timestamps: false,
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
