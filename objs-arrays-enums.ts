// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Maximilian',
//   age: 30
// }

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: [1, 'author']
};


const man: { role: [number, string]; } = {
  role: [1, 'author']
};

// default = 0, 1, 2
// 5, 6, 7
// value can be string.
enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
const woman = {
  role: Role.ADMIN
};

if (woman.role == Role.ADMIN) {
  console.log('she is admin!')
}



let favoriteActivities: string[];
favoriteActivities = ['sports'];


console.log(person.age)


for (const hobby of person.hobbies) {
  console.log(hobby);
}
