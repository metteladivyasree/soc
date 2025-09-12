//console.log("hello world");
//var name1 ="srit"
//console.log(name1)
//var name = "srit"
//console.log(name)
//var num1 ="divya"
//console.log(num1)
//const num6="srit"

//console.log(num6)
//
//function toknow(branch){
    //return "my branch is " +branch;
//}
// let message=toknow("csm");
// console.log(message);
// let generatewelcomemesage=(name,age,location)=>{
//     return "   welcome   "+ name+  "   my age is    "   + age+   "  i am from   "   + location;
// }
// let a=generatewelcomemesage("shiva",21,"bnglore");
// console.log(a);


// function name(name,score){
//     return "my name "+name+" my score is "+score;

// }
// let b=name("sathi",34);
// console.log(b);

// const score =29;
// console.log(score+2);
// console.log(score-2);
// console.log(score*2);
// console.log(score/2);
//function Areaofrectangle(length,breadth){
    //return length*breadth;

//}
//let area=Areaofrectangle(5,6);
//console.log(area);
// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
        
//     }
//     return n * factorial(n-1);
// }
// let num=10;
// console.log("factorial of "+num+" is "+factorial(num));
// function calculator(num1,num2,operator){
//     if(operator==='+'){
//         return num1+num2;
//     }else if(operator==='-'){
//         return num1-num2;
//     }else if(operator==='*'){
//         return num1*num2;
//         }else if(operator==='/'){
        
//             return num1/num2;
//         }else if(operator==='%'){
//             return num1%num2;

//         }
//         else{
//             return "invalid operator";
//         }
// }   
// let result=calculator(10,5,'+');
// console.log(result);
// let result1=calculator(10,5,'-');
// console.log(result1);
// let result2=calculator(10,5,'*');
// console.log(result2);
// let result3=calculator(10,5,'/');
// console.log(result3);
// let result4=calculator(10,5,'%');
// console.log(result4);

// function  calculator(num1,num2,operator){
//     return num1+operation+num2;

// }
// let result=calculator(10,5,'+');
// console.log(result);
// let result1=calculator(10,5,'-');
// console.log(result1);
// let result2=calculator(10,5,'*');
// console.log(result2);
// let result3=calculator(10,5,'/');
// console.log(result3);
// let result4=calculator(10,5,'%');
// console.log(result4);
// function calculator(num1,num2){
//     let sum=num1+num2;
//     let difference=num1-num2;
//     let product=num1*num2;
//     let quotient=num1/num2;
//     let remainder=num1%num2;
//     return {sum,difference,product,quotient,remainder};
// }
// console.log(calculator(10,5))
// calculate the compound Interest
// function compoundInterest(p,r,t){

//     let amount = p*Math.pow((1+r/100),t);
//     return amount;

// }
// console.log(compoundInterest(40000,5,2));
// let input1 = prompt("enter first number");
// let input2 = prompt("enter second number");
// let input3 = prompt("enter third number");
// let add = Number(input1+input2+input3);
// console.log(add);
//  marks = 56;
 
// if (marks>=90){
//     console.log( "grade : A");

// }
// else if (marks>=80){
//     console.log("grade :B");

// }
// else if (marks>=50){
//     console.log("grade: C");
// }
// else if(marks>=40){
//     console.log("grade: D");
// }

// else if (marks>=10)
//     console.log("grade:F");
// let speed = 30;

// let distance = 0

// for (let i = 10; i <=90; i += 10) {

//     distance = distance+speed/6; 
//     if (speed < 120) {


//     speed = speed * 2;

// }
// }

// distance = distance + speed/10
// console.log(distance);
// B= 30 FOR 4KM
// FOR THE NEXT 5KM THE PRICE IS 10
// FOR THE NEXT 10KM THE PRICE IS 15
// IF THE KMS ARE MORE THE WILL BE 20
// PERSON TRAVELLED 19.5 KMS WHAT WILL BE THE PRICE
// var  distance  =  19.5;
// let price=0;
// if(distance<=4){
//     price=distance*30;
// }else if(distance<=9){
//     price=4*30+(distance-4)*10;
// }else if(distance<=19){
//     price=4*30+5*10+(distance-9)*15;
// }else{
//     price=4*30+5*10+10*15+(distance-19)*20;
// }
// console.log("the price is "+price);
// /**
//  * Calculates the total fare based on a tiered pricing structure.
//  * @param {number} distance - The total distance traveled in kilometers.
//  * @returns {number} The total fare in dollars.
//  */
// function calculateFare(distance) {
//   let price = 0;

//   if (distance <= 4) {
//     price = distance * 30;
//   } else if (distance <= 9) {
//     price = 4 * 30 + (distance - 4) * 10;
//   } else if (distance <= 19) {
//     price = 4 * 30 + 5 * 10 + (distance - 9) * 15;
//   } else {
//     price = 4 * 30 + 5 * 10 + 10 * 15 + (distance - 19) * 20;
//   }

//   return price;
// }
// const distanceTraveled = 19.5;
// const totalPrice = calculateFare(distanceTraveled);

// console.log(`The price for a ${distanceTraveled} km journey is $${totalPrice}.`)

// i=0;
// while(i<11){
//     console.log(i*7);
//     console.log(i*2)
//     i++;
// }
let i=0;
do{
    console.log(i*5)
    i++;
}
while(i<11);