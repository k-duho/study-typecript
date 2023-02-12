let userInput: unknown;
let userName: string;

userInput = 1;
userInput = "String"
// userInput = () => { console.log("test") }

// userName = userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 400);
console.log(result)
