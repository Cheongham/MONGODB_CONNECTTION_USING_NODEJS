const mongoose = require('mongoose');

const URI ="mongodb://admin:admin@svc.gksl2.cloudtype.app:32124";
        // 'mongodb+srv://devCecy:<password>@devcecy.dprgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// 몽구스 연결
const connectDB = async () => {
  await mongoose.connect(URI, {
     useNewUrlPaser: true,
     useUnifiedTofology: true
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
)
.then(() => console.log('MongoDB conected'))
.catch((err) => {
  console.log(err);
});
};

module.exports = connectDB;
