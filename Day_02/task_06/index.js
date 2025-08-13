// Implement calculator logic using various function types (arrow, normal, IIFE).
let num=Number(prompt("enter a number_1:"))
let num_2=Number(prompt("enter anumber_2:"))
function calculator(num,num_2){
console.log(`sum of ${num} and ${num_2} = ${num+num_2}`)
console.log(`sub of ${num} and ${num_2} = ${num-num_2}`)
console.log(`mult of ${num} and ${num_2} = ${num*num_2}`)
console.log(`div of ${num} and ${num_2} = ${num/num_2}`)


}
calculator(num,num_2)

// IIFE for multiplication
(function(num1, num2) {
    console.log(`Product of ${num1} and ${num2} = ${num1 * num2}`);
})(5, 3); 