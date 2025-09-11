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
function calculator(num1,num2){
    let sum=num1+num2;
    let difference=num1-num2;
    let product=num1*num2;
    let quotient=num1/num2;
    let remainder=num1%num2;
    return {sum,difference,product,quotient,remainder};
}
console.log(calculator(10,5))