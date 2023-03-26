const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false, // by default mongoose adds a getter id that
               // returns _id
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per user
userSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // could be used when creating a new user - {fullName: 'Farley Wittles'}
  // Setter to set the first and last name
  .set(function (strArg) {
    /*
    const first = strArg.split(' ')[0];//Farley
    const last = strArg.split(' ')[1];//Wittles
    this.set({ first:first , last: last });
    */
    const [ first, last ] = strArg.split(/\w+/);
    this.set({ first, last });
  });


const User = model('user', userSchema);

const doc = new User();
// Vanilla JavaScript assignment triggers the setter
doc.fullName = 'Farley Wittles';

doc.fullName; // 'Farley Wittles'
doc.firstName; // 'Farley'
doc.lastName; // 'Wittles'
doc.firstName="Bacon";
doc.fullName; // Bacon Wittles

module.exports = User;
