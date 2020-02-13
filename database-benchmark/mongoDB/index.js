const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/rei';

mongoose.set('useCreateIndex', true);

mongoose.connect(mongoURI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongoose connected'));

const searchSchema = new mongoose.Schema({
  id: { type: Number, unique: true},
  term: String,
});

const Search = mongoose.model('SearchTerms', searchSchema);

module.exports = Search;
