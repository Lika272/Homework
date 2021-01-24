// let secondMax = function (arr) {
//     let max = Math.max.apply(null, arr);  //! apply() იღებს არგუმენტების ერთ წყობას.
//     arr.splice(arr.indexOf(max), 1); //! აქედან მაქსიმალურ რიცხვს ამოიღებს მასივიდან
//     //!Splice მასივში ამატებს / შლის მასივს და აბრუნებს ამოღებულ რიცხვებს
//     //!indexOf () აბრუნებს პირველ ინდექსს, რომელზეც მოცემული ელემენტის პოვნა შესაძლებელია მასივში, ან -1, თუ ასეთი ინდექსი არ არის
//     return Math.max.apply(null, arr); //! მეორე მაქსიმალურ რიცხვს ეძებს
// };
// let maxSec = secondMax(arr);
// console.log(maxSec);
let arr = [20,120,777,333,111,215,54,78]; 
secmax(arr)
function secmax(arr){
let max = 0;
let sec = 0;
for(i=0; i <= arr.length; i++){
if(arr[i] > max){
    if(max > sec){
        sec = max;
    }
    max = arr[i]
}
else if(arr[i] > sec){
    sec = arr[i]
}
}
console.log(sec)
}

function listColor(){
    let list = document.getElementsByTagName("li");
    for (i = 0; i < list.length; i++) {
      if(i % 2 === 0)
      list[i].style="color:green";
      else
          list[i].style="color:orange";
     }
   }
   listColor();
//!1111111111111111111111111111111111111111

// function secondLargest(nums) {
//    let largest = nums[0];
//    let large;
//     for (let i = 1; i < nums.length; ++i) {
//       if (nums[i] > largest) {
//           large = largest;
//           largest = nums[i];
//       } else if (nums[i] > large || typeof large === 'undefined') {
//           large = nums[i]
//       }
//     }
//     return large;
//   }
//   console.log(secondLargest([-2,3,4,5,8,9]))

//
  console.log(remove("გამარჯობა აკაკი"))
   function remove(string) {
    return string.replace(/[aeiouაეიოუ]/gi, '');// g მთელ კოდში ავრეცელბს i-ის იგნორს მასივში მოთავსებულ ასოებზე. 
  }



let ar = [-1, -2, -3, 0, 0, 5, 12, 0, -10];
function count(arr){
    let nagative = 0;
    let positive = 0;
    let zero = 0;
    for(i=0; i<=arr.length; i++){
    if(arr[i] < 0){
        nagative+=1;
    }
    else if(arr[i] > 0){
        positive+=1;
    }
    else if(arr[i] === 0){
        zero+=1;
    }
}
    console.log("Negative: "+nagative+" Positive: "+positive+" Zero: "+zero)
}
count(ar)


function reverse(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverse("251"));
