const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    console.log(data);
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    //Farley Wittles 
    //farleywittles.json
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// https://thecodebarbarian.com/the-80-20-guide-to-json-stringify-in-javascript
// const obj = { a: 1, b: 2, c: 3, d: { e: 4 } };

// // '{"a":1,"b":2,"c":3,"d":{"e":4}}'
// JSON.stringify(obj);

// // {
// //   "a": 1,
// //   "b": 2,
// //   "c": 3,
// //   "d": {
// //     "e": 4
// //   }
// // }
// JSON.stringify(obj, null, '  ');

// // Use 2 spaces when formatting JSON output. Equivalent to the above.
// JSON.stringify(obj, null, 2);