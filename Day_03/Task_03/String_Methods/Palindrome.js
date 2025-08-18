// Check if a string is a palindrome
// let num="12345678"
// let res=0
// let temp=num
// while(temp >0){
//     let digit=temp%10;
//     res=res*10+digit
//     temp=Math.floor(temp/10)
// }
// if (res==num){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// console.log(res)


let str="tarunsai"
let low_str=0
let high_str=str.length-1
let isPalindrome = true;
while(low_str<high_str){
    if(str[low_str]!==str[high_str]){
         isPalindrome = false;
        break
    }
    low_str++;
    high_str--;

}
if(isPalindrome){
    console.log("palindrome")
}
else{
    console.log("not_palindrome")

}