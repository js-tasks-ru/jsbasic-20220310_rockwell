function getMinMax(str) {
  let strArray = str.split(' ') .filter(item => item <= Infinity) .sort((a, b) => a - b);
  let result = {
  min: +strArray[0],
  max: +strArray[strArray.length - 1]
  }
  return result
}