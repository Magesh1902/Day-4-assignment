//Task 1: Simple Programs todo for variables
//1.Declare four variables without assigning values and print them in console
    
     var a;
     var b;
     var c;
     var d;
     console.log(a, b, c, d);

//2.How to get value of the variable myvar as output

    var myvar = 1;
    console.log("myvar");

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

    var firstName = "xxx";
    var lastName = "yyy";
    var maritalStatus = "zzz";
    var country = "aaa";
    var age = 45;
    
//4. Declare variables to store your first name, last name, marital status, country and age in a single line

    var firstName = "xxx", lastName = "yyy", maritalStatus = "zzz", country = "aaa", age = 45;

//5. Declare variables and assign string, boolean, undefined and null data types

    var a = "car";  //string
    var a = true;  // boolen
    var a;       // undefined
    var a = null;  //null

//6. Convert the string to integer
   //parseint()

   var num = "105";
   console.log(parseInt(num));

   //number()

   var x = Number("500");
   console.log(x);

   //plus(+);

   var x = "10";
   console.log(+x);

//6.Write 6 statement which provide truthy & falsey values.

//The following values are always falsy:

    false
    0  //(zero)
    -0 //(minus zero)
    0n //(BigInt zero)
    '', "", `` //(empty string)
    null
    undefined
    NaN

//Everything else is truthy. That includes:

    '0' //(a string containing a single zero)
    'false' //(a string containing the text “false”)
     [] //(an empty array)
     {}  //(an empty object)
    function(){}  //(an “empty” function)

//A single value can therefore be used within conditions.