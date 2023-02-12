var userInput;
var userName;
userInput = 1;
userInput = "String";
// userInput = () => { console.log("test") }
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 400);
console.log(result);
