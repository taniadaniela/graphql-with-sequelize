'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [ {
      firstname: "Test1", lastname: "User1", email: "some1@email.com", 
      password: "letsencryptthis",
      created_at: new Date(Date.now()).toISOString(), 
      updated_at: new Date(Date.now()).toISOString() },
      {
      firstname: "Test2", lastname: "User2", email: "some2@email.com", 
      password: "letsencryptthis",
      created_at: new Date(Date.now()).toISOString(), 
      updated_at: new Date(Date.now()).toISOString() },
      
        
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
