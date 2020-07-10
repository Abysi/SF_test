const fibonacciModule = require('../helpers/fibonacciSequence');
const fileModule = require('../helpers/fileManager');
const reverseModule = require('../util/reverse');

exports.rowProcessor = () => {
  const fileContent = fileModule.fileRead('source.txt');
  const fibonacciArray = fibonacciModule.getFibonacciArray(fileContent.length);

  let reverseArray = [];
  console.log(fibonacciArray);
  for (let index = 0; index < fileContent.length; index++) {
    if (fibonacciArray.includes(index)) {
      reverseArray += reverseModule.reverseArray(fileContent[index]) + `\n`;
    }
  }

  fileModule.fileWriter('output.txt', reverseArray.toString().split(','));
  console.log(reverseArray.toString());
};
