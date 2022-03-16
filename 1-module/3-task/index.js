function ucFirst(str) {
  if (!!str == false) {
    str = '';
  } else { 
    str = str[0].toUpperCase() + str.substring(1);
  }
  return str;
}
