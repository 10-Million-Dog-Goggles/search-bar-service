const fs = require('fs');
const faker = require('faker');


const writeEntries = fs.createWriteStream(__dirname + '/sampleDataM.csv');
writeEntries.write('id,term\n', 'utf8');

const writeTenMillionEntries = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = `${id},${faker.lorem.words(faker.random.number({ min: 2, max: 4}))} ${faker.commerce.product().toLowerCase()}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionEntries(writeEntries, 'utf8', () => {
  writeEntries.end();
});
