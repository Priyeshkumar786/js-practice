// console.log("hello priyesh this side")
// alert("Something went wrong")
// document.write("hello everybody")


// a=parseInt(prompt("enter value"))
// b=parseInt(prompt("enter another value"))

// console.log(a+b)

// console.log(a*b)

// console.log(a/b)

// console.log(a**3)

// -------------------------------------------✅ Q2: Write a program to swap two numbers ----------------------------------------------------

// let a = parseInt(prompt("enter number 1"))
// let b = parseInt(prompt("enter number 2"))

// console.log("The swapping number 1 is",a,"The swapping number two is ",b)

// let temp = a ;
// a=b
// b=temp;

// console.log("after swapping : a = ",a," , b = ",b);

// ----------------------------------- ✅ Q3: Write a program to find the largest of three numbers-------------------------------------------------


// a=parseInt(prompt("enter num 1"))
// b=parseInt(prompt("enter num 2"))
// c=parseInt(prompt("enter num 3"))

// if (a>=b && a>=c){
//     console.log(a,"is the largest number");
// }
// else if(b>a && b>c){
//     console.log(b,"is the largest number");
// }
// else{
//     console.log(c,"is the largest number");
// }


// ------------------------------------ ✅ Q4: Write a program to print the sum of first 10 natural numbers--------------------------------------------
//using for loop
// let sum=0

// for (let i = 1;i<=10; i++){
//     sum+=i;

// }

// console.log("sum of 10 natural numbers : ",sum )

// using while loop------------------------------------------------------
// let sum=0
// let a=1
// while(a<=10){
//     sum+=a
//     a++
// }
// console.log("the sum of 10 natural number is : "+sum)

// -------------------------------PRINT TABLE OF ANY NUMBER---------------------------

let num=parseInt(prompt("enter any number"))
for (let i = 1;i<=10;i++){
    console.log(num,"x",i,"=",num*i)
}