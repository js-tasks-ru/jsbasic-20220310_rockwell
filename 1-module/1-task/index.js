function factorial(n) {
  let result = n;
  if (result == 0){
    result++;
  } else {
      for (let i = (n-1); i > 0; i--){
      result *= i;
    }
  }
  return result;
}
