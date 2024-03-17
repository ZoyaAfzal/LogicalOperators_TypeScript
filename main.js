//LOGICAL OPERATORS:
//Short Circuit Logical Operators:
//|| (OR) , && (AND) , !(NOT)
// AND (&&) Logical Operator:
/*The Logical Operator is used with two or more values (operands), and only evaluates to true if all the operands
are true. It will return the false value if atleast one value is false.*/
let num1 = 5;
let num2 = 6;
let result0 = num1 > num2 && num2 < 10; //Output False
let result1 = num1 < num2 && num2 < 10; //Output True
let result2 = num1 < num2 && num2 < 10 && num2 > 4; //Output True
let result3 = num1 < num2 && num2 < 10 && num2 > 6; //Output False
let result4 = num1 < num2 && num2 < 10 && num2 == 6; //Output True
console.log(result0);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
//OR (||) Logical Operators:
/* The Logical Operator evaluates to true if any of the values (operands) are true, only evaluates to false if both
operands are false. It can also used with two ar more values.*/
let num3 = 60;
let num4 = 50;
let answer0 = num3 < num4 || num3 > num4; //Output True
let answer1 = num3 < 50 || num3 > num4; //Output True
let answer2 = num3 < num4 || num3 < 40 || num4 > 80; //Output False
let answer3 = num3 != num4 || num3 <= 60 || num4 >= 50; //Output True
let answer4 = num3 == num4 || num3 <= 30 || num4 >= 60; //Output False
console.log(answer0);
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
//NOT (!) Logical Operator:
/*Using the ! Operator in front ofv a boolean will convert to ot to Opposite value. It means thatv a true value will
return false, and a false value will return true. This method is known as Negation.*/
let num5 = 70;
let num6 = 30;
let ans0 = !(num5 > num6); //Output False
let ans1 = !(num5 < num6); //Output True
let ans2 = !(num5 < 100); //Output False
let ans3 = !(num5 == num6); //Output True
let ans4 = !(num5 != num6); //Output False
console.log(ans0);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
//Double NOT (!!) Logical Operator:
/*Using the operator infront of a value will convert to a Boolean and negate it twice, useful when you convert a value
to Boolean*/
let num = 8;
let output = !num; //Output True
let output1 = !!num; //Output False
console.log(num);
console.log(output);
console.log(output1);
export {};
