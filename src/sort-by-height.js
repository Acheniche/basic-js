const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ArrOFIndexes = [];
  let ArrOfElements = [];
  let resultArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === -1){
      ArrOFIndexes.push(i);
    }else{
      ArrOfElements.push(arr[i])
    }
  }
  ArrOfElements.sort(function(a,b){
    return a - b;
  })
  for(let i = 0; i < arr.length; i++){
    if (i === ArrOFIndexes[0]) {
      resultArr.push(-1);
      ArrOFIndexes.shift();
  } else {
      resultArr.push(ArrOfElements[0]);
      ArrOfElements.shift();
  }
  }
return resultArr;
}

module.exports = {
  sortByHeight
};
