// HOF - High order functions

// const logHappyFace = () => {
//   return '😁';
// };

// const logSadFace = () => {
//   return '😢';
// };

// const logMood = (faceFunction) => {
//   return faceFunction();
// };

// logMood(logHappyFace);

// HOF - Demonstrating that they are objects 
// logMood.newProperty = () => console.log("Hi I am property of this function")

// logMood.newProperty()

// HOF - RETURNING A FUNCTION

// const incrementValue = (value) => {
//   let defaultValue = 0; 
//   return () => {
//     return defaultValue += value
//   }
// }

// const myHOF = incrementValue(3)
// console.log(myHOF())

// //Map, forEach, reduce, filter

// const faceArray = ['😢', '😁', '😊', '😂', '🤣'];

// const reducedFaces = faceArray.reduce( (accum, currentValue) => accum + currentValue)

// console.log("REDUCE RESULT", reducedFaces);


// let sadFace = faceArray.map((face) => {
//   return face === "😢" && face;
// })
// console.log("MAP RESULT", sadFace)

// sadFace = sadFace.filter((element) => {
//      return element === "😢";
// })
// console.log("FILTER RESULT", sadFace)

