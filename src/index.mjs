import "./styles.css";

// for... in - Objects
// for... of - Arrays


// For in loops
const posts = {
  "id": 1,
  "name": "Tom"

}


// for(let post in posts) {
//   console.log(post);  // id, name - properties
// }

// for(let post in posts) {
//   console.log(posts[post]);  // 1, Tom - values

// }



const array = [1,2,3,4,5];

// for(let arr in array) {
//   console.log(arr); // 0,1,2,3,4 - indices
// }

// for(let arr in array) {
//   console.log(array[arr]); // 1,2,3,4,5 - values
// }


// For of loop
// for of will not work with objects - as they are not iterable

for(let arr of array) {
  console.log(arr); // 1,2,3,4,5 - Values
}