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
//                    by for loop


// let num=parseInt(prompt("enter any number"))
// for (let i = 1;i<=10;i++){
//     console.log(num,"x",i,"=",num*i)
// }

// ----------------------------------by -while loop-------------------------------

// let num=parseInt(prompt("enter number"))
// let i=1

// while(i<=10){
//     console.log(num*i)
//     i++
// }




// Q> 1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5


// for(let i=1;i<=5;i++){                
//   let row=""
//   for (let j=1;j<=i;j++){
//     row+=j

//   }
//   console.log(row);
// }


// for (let i=1;i<=5;i++){
//   row=""
//   for (let j=1;j<=i;j++){
//   row+=j+"  "
//   }
//     console.log(row)
// }

// for (let i=1;i<=5;i++){
//   row=""
//   for (let j=1;j<=i;j++){
//     row+=j," "
//   }
//   console.log(row)

// }

// for (let i=1;i<=5;i++){
//   row=" "
//   for (let j=1;j<=i;j++){
//     row+=j+" "
//   }
//   console.log(row)
// }

// Q.} Floyd's Triangle

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let num=1
// for (let i=1;i<=5;i++){
//   row=""
//   for (let j=1;j<=i;j++){
//     row+=num+" "
//     num++
//   }
//   console.log(row)
//   total=(row)
// }

// ============================================even odd==============================================================
// number=parseInt(prompt("enter number : "))
// function checkevenodd(num)
// {
//   if(num%2==0){
//     console.log(num,"even number")
//   }
//   else{
//     console.log(num,"is odd number")

//   }
// }
// number
// ======================================================================================================================


// --------------------------------------- grade ------------------------------------------


// let num1=parseInt(prompt("enter num 1"))
// let num2=parseInt(prompt("enter num 2"))
// let num3=parseInt(prompt("enter num 3"))
// let num4=parseInt(prompt("enter num 4"))
// let num5=parseInt(prompt("enter num 5"))

// let total=num1+num2+num3+num4+num5
// console.log("total numbers of all subjects are : "+total)
// let percentage=(total/500)*100
// console.log("total percentage of 5 subjects are: "+percentage)


// if (percentage >=90 && percentage<=100){
//   console.log("Grade A")
// }

// else if (percentage>75 && percentage<90){
//   console.log("Grade B")

// }

// else if(percentage>50 && percentage <75){
//   console.log("Grade C")
// }

// else if(percentage>33 && percentage<50){
//   console.log("Grade D")
// }

// else{
//   console.log("Fail")
// // }

// let num = parseInt(prompt("Enter a number: "));

// if (num > 0) {
//     console.log(num + " is Positive");
// } else if (num < 0) {
//     console.log(num + " is Negative");
// } else {
//     console.log("Number is Zero");
// }

// some more process
// ==========================================

// Q.no 1 - Create 15 <div> elements using JavaScript.
// Color all odd-numbered divs blue, and set their width = 100px, height = 50px.

// for(let i=1;i<=15;i++){
//     let box = document.createElement("div");
//     box.textContent = "BOX "+i;
//     box.style.width = "100px";
//     box.style.height = "50px";
//     box.style.margin = "5px"
//     box.style.textAlign = "center"
//     box.style.lineHeight = "50px";
//     box.style.border = "1px solid black"


//     if(i%2!==0){
//         box.style.backgroundColor = "blue"
//         box.style.color = "white";
//     }

//     document.body.appendChild(box);
// }


// --------------------------------------------------
// Create 15 <div> elements using JavaScript.
// Color all odd-numbered divs blue, and set their width = 100px, height = 50px.

// for (let i = 1;i<=15;i++){
//     let box = document.createElement('div')
//     box.textContent = "Box" + i;
//     box.style.width = "100px"
//     box.style.height = "50px"
//     box.style.textAlign= "center"
//     box.style.border = "1px solid black"

//     if(i%2!=0){
//         box.style.backgroundColor = "blue"
//         box.style.color = "white"

//     }

//     document.body.appendChild(box)
// }

// ================================================================================================================
// 🧩 Q2.

// Create 10 <p> elements using JavaScript.
// For every even-numbered paragraph, set:
// background color = yellow
// font size = 20px


// for (let i = 1;i<=10 ; i++){
//     let box = document.createElement('p')
//     box.textContent = "box" +i
//      box.style.textAlign = "center"

    
//     if(i%2===0){

//         box.style.backgroundColor="yellow"
//         box.style.fontSize="20px"
       
    
//     }
//     document.body.appendChild(box)


// }

// ================================================================================================
// 🧩 Q3.

// Create 5 <h3> tags dynamically using JavaScript.
// Give each heading a different color using an array of colors.

// let colors = ["red","green","blue","yellow","black"];

// for(let i = 0;i<colors.length;i++){
//     let heading= document.createElement("h3");
//     heading.textContent = "this is heading " + (i+1);

//     heading.style.color = colors[i];
//     heading.style.fontFamily=" arial "

//     document.body.appendChild(heading)
    
// }

// --------------------------------------------------------------

// for (let i = 1;i<=15;i++){
//     let odd = document.createElement("div")

//     odd.textContent = "this is div "+i
//     odd.style.textAlign="center"
//     odd.style.width="100px"
//     odd.style.height = "50px"
//     odd.style.border="1px solid black"

//     if(i%2!=0){
//         odd.style.backgroundColor="blue"
//         odd.style.color="white"
//     }

//     document.body.appendChild(odd)



// }
// ===============================================================
    // let num = parseInt(prompt("enter number : "))

    // console.log("Original value:", num);

    // num++;  // increment
    // console.log("After increment:", num);

    // num--;  // decrement
    // console.log("After decrement:", num);

// =============================================================

    // Increment in loop
    // for (let i = 1; i <= 5; i++) {
    //   console.log("Increment Loop Value:", i);
    // }

    // // Decrement in loop
    // for (let j = 5; j >= 1; j--) {
    //   console.log("Decrement Loop Value:", j);
    // }
    // ---------------------------------------------------------------

    // 1.)

    // function fun(){
    //  let a=  document.getElementById("java").textContent= "Welcome to javascript dom"
     
    // }

    // -------------------------------------------------------------------

    // 2.)

    // function fun1(){

    //   document.getElementById("head").style.backgroundColor="red"

     //---------------------------------------------------------------------------

    // }

    // 3.)
    
    //error*
    // function showname(){
    //     let name = document.getElementById("username").value 
    //     document.getElementById("displayname").textContent = "hello, "+name 
    // }

    // ---------------------------------------------------------------------------

    // function fun1(){
    //     let a = document.getElementById("username").value 
    //     document.getElementById("displayname").textContent = "hello, "+a
    // }


// ---------------------------------------------------------------------------------------
                                   //  home practice                                    
  
    let final = document.querySelectorAll("p")
    final.(p=>{
        p.style.color = "blue"
    })

    // let final1 = document.querySelectorAll("#self1")
    // final1.forEach(p=>{
    //     self1.style.color = "black"
    // })

    // --------------------------------------------------------------------------------------

    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra

    
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    

    my name is priyesh kumar mishramy name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra

    my nmae is priyesh kumar mishra
    my nmae is priyesh kumar mishra
    my nmae is priyesh kumar mishra
    my nmae is priyesh kumar mishra
    my nmae is priyesh kumar mishra
    my nmae is priyesh kumar mishra
    my nmae is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra

    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kuamr mishra
    my name is priyesh kuamr mishra
    my name is priyesh kuamr mishra
    my name is priyesh kumar mishra 
    
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra
    my name is priyesh kumar mishra    
    my name is priyesh kumar mishra    
    my name is priyesh kumar mishra    
    my name is priyesh kumar mishra    

    my name is priyesh kumar mishra    