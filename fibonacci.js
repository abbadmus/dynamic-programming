// conventional method
const fib1 = (n) => {
  if (n <= 2) return 1;
  return fib1(n - 1) + fib1(n - 2);
};

console.log(fib1(50));


const fib2 = (n, meno = {}) => {
  if (n in meno) return meno[n];
  if (n <= 2) return 1;
  meno[n] = fib2(n - 1, meno) + fib2(n - 2, meno);
  return meno[n];
};

console.log(fib2(60));
