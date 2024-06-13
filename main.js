"use strict";
// // // //  Q 26:
// // //  first version
Object.defineProperty(exports, "__esModule", { value: true });
// // let alien_color:string="red"; 
// // if (alien_color === "green"){
// //     console.log('Congrats! you earned 5 points.')
// // }
// // else{
// //     console.log('Congrats! you earned 10 points.')
// // }
// // //  Second version:
// // if (alien_color === "green"){
// //     console.log('Congrats! you earned 5 points.')
// // }
// // else {
// //     console.log('Congrats! you earned 10 points.')
// // }
// //  Q27
// // • If the alien is green, print a message that the player earned 5 points.
// //  First version: 
// let alien_color:string="green";
// if (alien_color === "green"){
//     console.log('Congrats! you earned 5 points.')
// }
// else if (alien_color === "yellow"){
//     console.log('Congrats! you earned 10 points.')
// }
// else {
//     console.log('Congrats! you earned 15 points.')
// }
// // • If the alien is yellow, print a message that the player earned 10 
// //  Second version:
// alien_color ="yellow"
// if (alien_color === "green"){
//     console.log('Congrats! you earned 5 points.')
// }
// else if (alien_color === "yellow"){
//     console.log('Congrats! you earned 10 points.')
// }
// else {
//     console.log('Congrats! you earned 15 points.')
// }
// // • If the alien is red, print a message that the player earned 15 points
// //  third version
// alien_color ="red"
// if (alien_color === "green"){
//     console.log('Congrats! you earned 5 points.')
// }
// else if (alien_color === "yellow"){
//     console.log('Congrats! you earned 10 points.')
// }
// else {
//     console.log('Congrats! you earned 15 points.')
// }
//  Q 28:
/*Stages of Life:
// /*/ let age = 18;
// if (age < 2){
//     console.log("You are a baby.");
// }
// else if (age >=2 && age < 4){
//     console.log("You are a toddler.");
// }
// else if (age >=4 && age < 13){
//     console.log("You are a kid.");
// }
// else if (age >=13 && age < 20){
//     console.log("You are a teenager.");
// }
// else if (age >= 20 && age < 65){
//     console.log("You are an adult.");
// }
// else{
// console.log("You are an elder.");
// }
//  Q 29:
// let fav_fruits:string[]=["apple","banana","mango"];
// if (fav_fruits.includes("banana")){
//     console.log("I really like banana.");
//     }
//    if (fav_fruits.includes("apple")) {
//     console.log("I really like apple.");
//    }
//    if (fav_fruits.includes("mango")) {
//     console.log("I really like mango.");
//    }
//    if (fav_fruits.includes("strawberry")){
//     console.log("I donot like this fruit.");
//    }
//   if (fav_fruits.includes("papaya")){
//     console.log("I donot like this fruit.");
//    }
//  Q 30:
let user_names = ["Admin", "Annee", "Amna", "Abdullah", "Asad"];
// user_names.forEach(greetings => {
//     console.log(`Hello! ${user_names} Thanks for logging in again. `);
// });
for (let i = 0; i < user_names.length; i++)
    if (user_names[i] === "Admin") {
        console.log("Wpuld you like to see a status report?");
    }
    else {
        console.log(`Hello ! ${user_names[i]}, Thanks for logging in again!`);
    }
