const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//do once before the testing begins
before(done => {
  mongoose.connect('mongodb://localhost/cheftank_test');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', error => {
      console.warn('Error:', error);
    });
});

//do each time after a test is complete (clear out the test db)

beforeEach(done => {
  const { users } = mongoose.connection.collections;
  users.drop(() => {
    done();
  });
});
