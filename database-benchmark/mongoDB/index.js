const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/rei';

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const searchSchema = new mongoose.Schema({
  id: { type: Number, unique: true},
  term: { type: String, trim: true }
});

searchSchema.index({ term: 'text' });

mongoose.connect(mongoURI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongoose connected'));

const Search = mongoose.model('searchterms', searchSchema);

module.exports = Search;
