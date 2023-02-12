function add1(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
};

function add2(n1: number, n2: number): number {
  return n1 + n2;
};

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (number) => { console.log(number)})

function consoleLogNum(num: number) {
  console.log('Result:' + num);
};

consoleLogNum(5555)


// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

// combineValues = add1;
combineValues = add2;

console.log(combineValues(1, 2222))
