var destination=['sajeck', 'coxsbazar','nepal', 'thailend'];
destination.push('bhutan');
destination.pop();
console.log(destination[3]);

// problems 1

var fruits = ['apple', 'banana','Orange'];
fruits[1]=('Mango');
fruits.pop();
fruits.push('Watermelon');

// var  fruit=fruits.indexOf('banana');
console.log(fruits);

// provlems-2------------------
 var number=72;
 if(number>80){
    console.log("A+ Grade");
 }
 else if(number>70){
    console.log("A- Grade");
 }
 else if (number>60){

    console.log('B Grade');
 }
 else if(number>50){
    conslose.log("C Grade");
 }
 else if(number>40){
    console.log("D Grade");
 }
 else{
    console.log("fail");
 }

//  problems -------------3----------
var oneNumbers=13;
var twoNumbers=79;
var theeNumbers=50;

if(oneNumbers>=twoNumbers && oneNumbers>=theeNumbers){
    console.log(oneNumbers);
}
else if(twoNumbers>=oneNumbers&&twoNumbers>=theeNumbers){
    console.log(twoNumbers);
}
else{
    console.log(theeNumbers);
}
// provelms-----------4------------
var number1=9;
var number2=8;
var number3=9;

if(number1==number2 || number1==number3 || number2==number3){
    console.log('somudi bahu Tivuj');
}
else{
    console.log("pari na kn");
}