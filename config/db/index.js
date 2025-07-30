const mongoose = require('mongoose');
async function connect () {
 try {
    await mongoose.connect('mongodb://localhost:27017/quan_ly_khoa_hoc', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

    console.log('successfully');
 } catch (error) {
    console.log('unsuccessfully');
 }
}

module.exports = { connect };