// // Perform arithmetic operations and control flow using if/switch.
// let a =45
// let b=3
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// // consitional statements
// let c=100;
// let d=200;
// if (c>d){
//     console.log(`${c} is greater than ${d}`)
// }
// else if(c>=d){
//     console.log(true)
// }
// else if(c===d){
//     console.log(true)
// }
// else if(c==d){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// write a code for discount
// let discount=1000
// let Coupan_1="KRT23BY"
// let Coupan_2="FDER22YU"
// let Coupan_3="45RTBV"
// let user_coupan=prompt("enter ur coupan:")
// if (user_coupan==Coupan_1){
//     discount-=100
// }
// else if (user_coupan==Coupan_2){
//     discount-=90
// }
// else if (user_coupan==Coupan_3){
//     discount-=30
// }
// else{
//     console.log("invalid")
// }
// console.log(`final price after discount:${discount}`)

// switch_case
let discount=1000
let Coupan_1="KRT23BY"
let Coupan_2="FDER22YU"
let Coupan_3="45RTBV"
let user_coupan=prompt("enter ur coupan:")
switch (user_coupan) {
    case Coupan_1:
        discount-=100
         console.log("Coupon applied: ₹100 off");;
        break;
    case Coupan_2:
        discount-=50
         console.log("Coupon applied: ₹50 off");;
        break;
    case Coupan_3:
        discount-=30
         console.log("Coupon applied: ₹30off");;
        break;

    default:
         console.log("Invalid coupon code. No discount applied.");
        break;
}
console.log(`final price after discount:${discount}`)
