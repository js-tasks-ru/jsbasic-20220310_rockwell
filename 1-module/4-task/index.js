function checkSpam(str) {
  let result;
  str = str.toUpperCase();
  if ((str.includes('1XBET'))||(str.includes('XXX'))){
      result = true;
  } else {
      result = false;
  }
  return result;
}
