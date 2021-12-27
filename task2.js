//Task 2: Simple Programs todo for Operators

//1.Square of a number

let num = 8;
console.log("the square of the number:"+Math.pow(num , 2));

//2.Swapping 2 numbers

let a = 5;
let b = 7;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a is now :" ,a);
console.log("b is now :" ,b);

//3.Addition of 3 numbers

let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log("addition of 3 number :" +parseInt(num1 + num2 + num3));

//4.Celsius to Fahrenheit conversion

let celsius = 30;
let Fahrenheit =((1.8 * celsius) + 32);
console.log("celsius to Fahrenheit :" +Fahrenheit);

//5.Meter to miles

let Meter = 10;
let miles = (Meter/1609.344);
console.log("Meter to miles :" +mile.tofixed(3));

//6..Pounds to kg

let Pounds = 100;
let kg = (Pounds * 0.45359237);
console.log("pounds to kg :" +kg.toFixed(3) + "kg");

//7.Calculate Batting Average

let runsScored= 200;
let timeout = 40;
const Average = (runsScored/timeout);
console.log("batting average :" +Average);

//8.Calculate five test scores and print their average

let test1 = 102;
let test2 = 204;
let test3 = 150;
let test4 = 180;
let test5 = 130;
const averagetestscore= (test1+test2+test3+test4+test5)/5;
console.log("averagetestscore :" +averagetestscore);

//9.Power of any number x ^ y.

let x=6;
let y=9;
let Power = math.pow(x , y);
console.log("power of number :" +Power);

//10.Calculate Simple Interest

let p = 100;
let r = 203;
let t = 10;
let SI = p * r * t ;
console.log("simple interest :" +SI);

//11.Calculate area of an equilateral triangle

const a = 9;
const equilateral_triangle_area = Math.sqrt(3) / 4 * (a * a); 
console.log("equilateral_triangle_area :" +equilateral_triangle_area);

//12.Area Of Isosceles Triangle

let base = 10;
let height = 6;
let area1 = (base*height)/2;
console.log("Area Of Isosceles Triangle: "+area1);

//13.Volume Of Sphere
let radius = 2;
let PI =3.141592653589793238;
let volume = (4/3)*PI*Math.pow(radius,2);
console.log("Volume Of Sphere: "+volume.toFixed(2));

//14.volume of prism

let length1 =5;
let width1 =6;
let height1 =9;
let volume1 =length * width * height;
console.log("Volume Of Prism: "+volume);

//15..Find area of a triangle
let base2 = 3;
let height2 = 6;
let area2 = (base*height)/2;
console.log("Area Of Triangle: "+area2);

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product

let actualCost = 900;
let soldCost = 650;
const Discount = (actualCost - soldCost)/actualCost * 100;
console.log("discount of product ;" +Discount + "%");

//16..Given their radius of a circle and find its diameter, circumference and area.

let radius2 = 6;
let pi = 3.141592653589793238;
let diameter = (radius2*2);
let circumference = (2*pi*radius2);
let area3 = pi*Math.pow(radius2,2);
console.log("diameter :"+diameter,",","circumference :"+circumference.toFixed(2),",","area :"+area3.toFixed(2));

//17.Given two numbers and perform all arithmetic operations

var num1 = 10;
var num2 = 15;
console.log("addition :" +parseInt(num1 + num2));
console.log("subtraction :" +parseInt(num1 - num2));
console.log("multiplication :" +num1 * num2);
console.log("division :" +num1 / num2);
console.log("modulas :" +num1 % num2);

//18.Display the asterisk pattern as shown below(No loop needed):

console.log("*", "*" , "*" ,"*", ",");
console.log("*", "*" , "*" ,"*", ",");
console.log("*", "*" , "*" ,"*", ",");
console.log("*", "*" , "*" ,"*", ",");
console.log("*", "*" , "*" ,"*", ",");

//19.Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

let wattsPerHour = 100 ;
let wattsPerDay = wattsPerHour*24 ;
let dailyUnits = (wattsPerDay/1000) ;
let monthlyUnits = dailyUnits*30 ;
let totalEnergyBill = monthlyUnits*10 ;
console.log(totalEnergyBill);

//20.Program To Calculate CGPA

let English = 9.1,Tamil = 8.5,Maths = 9.5,Science =9.6,SocialScience = 8.6    
let CGPA = (English+Tamil+Maths+Science+SocialScience)/(5)  
console.log(" CGPA is: "+CGPA);  