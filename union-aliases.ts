// function combine(input1: number, input2: number) {
//   const result = input1 + input2
//   return result;
// };

// const conbinedAges = combine(30, 26);
// console.log(conbinedAges);


// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 == 'number') {
//     result = input1 + input2
//   } else {
//     result = input1.toString() + input2.toString();
//   }
  
//   return result;
// };

type Combiable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(input1: Combiable, input2: Combiable, resultConversion: ConversionDescriptor) {
  let result;
  if (resultConversion === 'as-string') {
    result = input1.toString() + input2.toString();
  } else if (resultConversion === 'as-number') {
    result = +input1 + +input2;
  }
  return result;
};

const conbinedNames = combine("ho", "du", 'as-string');
console.log(conbinedNames);

const addNumbers = combine("5", "3", 'as-number');
console.log(addNumbers);

const addNumbers2 = combine("55", "333", 'as-number');
console.log(addNumbers2);
