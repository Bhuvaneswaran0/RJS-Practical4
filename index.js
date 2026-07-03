const students = [
  { name: "bhuvan", age: 20, grade: "A" },
  { name: "arun", age: 19, grade: "B" },
  { name: "daven", age: 21, grade: "A+" }
];

// Process the array using object destructuring
students.forEach(({ name, age, grade }) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Grade: ${grade}`);
  console.log("------------------");
});
