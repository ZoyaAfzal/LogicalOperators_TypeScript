//LOGICAL OPERATORS:
//Short Circuit Logical Operators:
//|| (OR) , && (AND) , !(NOT)

// AND (&&) Logical Operator:
/*The Logical Operator is used with two or more values (operands), and only evaluates to true if all the operands
are true. It will return the false value if atleast one value is false.*/

let num1:number = 5;
let num2:number = 6;
let result0:boolean = num1 > num2 && num2 < 10; 
let result1:boolean = num1 < num2 && num2 < 10; 
let result2:boolean = num1 < num2 && num2 < 10 && num2 > 4; 
let result3:boolean = num1 < num2 && num2 < 10 && num2 > 6; 
let result4:boolean = num1 < num2 && num2 < 10 && num2 == 6; 
console.log(result0);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


//OR (||) Logical Operators:
/* The Logical Operator evaluates to true if any of the values (operands) are true, only evaluates to false if both
operands are false. It can also used with two ar more values.*/

let num3:number = 60;
let num4:number = 50;
let answer0:boolean = num3 < num4 || num3 > num4; 
let answer1:boolean = num3 < 50 || num3 > num4; 
let answer2:boolean = num3 < num4 || num3 < 40 || num4 > 80; 
let answer3:boolean = num3 != num4 || num3 <= 60 || num4 >= 50; 
let answer4:boolean = num3 == num4 || num3 <= 30 || num4 >= 60;
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);

//NOT (!) Logical Operator:
/*Using the ! Operator in front ofv a boolean will convert to ot to Opposite value. It means thatv a true value will
return false, and a false value will return true. This method is known as Negation.*/

let num5:number = 70;
let num6:number = 30;
let ans0:boolean = !(num5 > num6); 
let ans1:boolean = !(num5 < num6);
let ans2:boolean = !(num5 < 100); 
let ans3:boolean = !(num5 == num6); 
let ans4:boolean = !(num5 != num6); 
console.log(ans0);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);

//Double NOT (!!) Logical Operator:
/*Using the operator infront of a value will convert to a Boolean and negate it twice, useful when you convert a value
to Boolean*/

let num:number = 8;
let output:boolean = !num; 
let output1:boolean = !!num;
console.log(num);
console.log(output);
console.log(output1);




