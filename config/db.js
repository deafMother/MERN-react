// to set up the connection to mongo db
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MogoDB Connected');
  } catch (err) {
    console.log(err.message);
    // exit procees with failure
    process.exit(1);
  }
};

module.exports = connectDB;
