const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:p%40ssword@cluster0.tqcywtd.mongodb.net/rutcodingsocialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;