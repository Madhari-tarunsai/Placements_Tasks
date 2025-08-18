// Count the number of vowels in a string
let vowels="hyderabad"
let count=0
for (let i=0;i<vowels.length;i++){
   let ch=vowels[i]
   if (ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
    count++
   }


}
console.log(count)


let str = "hyderabad";
let vowels1 = ['a', 'e', 'i', 'o', 'u'];
let count1 = 0;

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels1.length; j++) {
        if (str[i] === vowels1[j]) {
            count1++;
        }
    }
}

console.log("Total vowels =", count1);
