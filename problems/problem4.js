// Write a JavaScript program that uses the for...of loop to iterate over an array of objects. Each object represents a student with name, marks, and subject. The program should print the student's name and subject only if their marks are greater than or equal to 50.

// Example Input:1

// Expected Output:1

// Bob - Science  
// Charlie - English
// Example Input:2

// let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];
// Example Output:2

// grapefruit

let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
];

for (let key of students) {
    if (key.marks >= 50) {
        console.log(`${key.name} - ${key.subject}`);

    }

}

let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];

for (let key of words) {
    // console.log(key.length);
    if (key.length >= 10) {
        console.log(key);

    }

}