const mongoose = require("mongoose");


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// main();

var db = main()
// .then((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('good');
//   }
// })
// console.log('db ', db);

const glossarySchema = new mongoose.Schema({
  word: { type: String, default: '' },
  definition: { type: String, default: '' }
});

const Glossary = mongoose.model('Glossary', glossarySchema);
console.log('Glossary ', Glossary);

const save = (data) => {
  Glossary.create({word: data.word,
    definition: data.definition});
  console.log('success');
}


module.exports.save = save;