const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports = User = mongoose.model('user', userSchema);  // user라는 이름의 모델(테이블)을 만든다
