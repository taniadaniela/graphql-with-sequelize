// TODO point this to server structure
// import Sequelize from 'sequelize';
// import Faker from 'faker';
// import _ from 'lodash';

// //db.js
// const Conn = new Sequelize("postgres");

// const Person = Conn.define('person', {
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     validate: {
//       isEmail: true
//     }
//   }
// });

// const Post = Conn.define('post', {
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   content: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Relations
// Person.hasMany(Post);
// Post.belongsTo(Person);

// Conn.sync({ force: true }).then(()=> {
//   _.times(10, ()=> {
//     return Person.create({
//       firstName: Faker.name.firstName(),
//       lastName: Faker.name.lastName(),
//       email: Faker.internet.email()
//     }).then(person => {
//       return person.createPost({
//         title: `Sample post by ${person.firstName}`,
//         content: 'here is some content'
//       });
//     });
//   });
// });

// export default Conn;
