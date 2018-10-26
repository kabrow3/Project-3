'use strict';

module.exports = {
  up: queryInterface => {
    queryInterface.bulkInsert(
      "Triggers",
      [
        {
          id: "1",
          name: "Eating Disorders"
        },
        {
          id: "2",
          name: "Police Brutality"
        },
        {
          id: "3",
          name: "R*pe"
        },
        {
          id: "4",
          name: "Su*c*de/Self-H*rm"
        },
        {
          id: "5",
          name: "Flashing Lights/Strobe Effect"
        },
        {
          id: "6",
          name: "Sexism"
        },
        {
          id: "7",
          name: "Racism/Prejudice"
        },
        {
          id: "8",
          name: "Domestic Violence"
        },
        {
          id: "9",
          name: "Gunfire/Gun Violence"
        },
        {
          id: "10",
          name: "Racism/Prejudice"
        },
        {
          id: "11",
          name: "Warfare"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
