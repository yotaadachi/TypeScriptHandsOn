export {};

const reducer = (accu: number, curr: number) => {
  console.log({accu, curr});
  return accu + curr;
}

const sum = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1,2,3,4,5));
