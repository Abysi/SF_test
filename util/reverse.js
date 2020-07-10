exports.reverseArray = arr => {
  let revArray = new Array();
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray += arr[i];
  }
  return revArray;
};
