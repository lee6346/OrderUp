const assert = require('assert');
const User = require('../../../src/models/user');

describe('Create user records', () => {
  it('saves a user', done => {
    const james = new User({
      email: 'jamesjames@gmail.com',
      password: 'fjie93kei9d0',
    });
    james.save().then(() => {
      assert(!james.isNew);
      done();
    });
  });
});
