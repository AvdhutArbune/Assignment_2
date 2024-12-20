//code1:
// let book = {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     year: 1937
//   };

// function user_book(bookdata){
//     return`title: ${bookdata.title}\nauthor : ${bookdata.author} \nyear: ${bookdata.year}`
// }
// console.log(user_book(book));

// output=//   title: The Hobbit
//   author: J.R.R. Tolkien
//   year: 1937


//code2:
let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}
