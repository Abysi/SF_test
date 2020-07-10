const fs = require('fs');

exports.fileWriter = (fileName, text) => {
  fs.writeFileSync(fileName, text, err => {
    if (err) throw err;
    else console.log('Operation Successful');
  });
};

exports.fileRead = fileName => {
  const fileContent = fs.readFileSync(fileName, err => {
    if (err) throw err;
  });
  return fileContent.toString().split(/[\n,\r]+/);
};
