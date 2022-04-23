`Ternary Operator
let x = 100;
let answer;

if (x > 50) {
    answer = 50;
} else {
    answer = x
}
`
let x = 100;
let answer = x > 50 ? 50 : x;

//-------------------------------------//

`Short circuit Evaluetion Shothand

let var1, var2;
if (var1 !== undefined && var1 !== null && var1 !== '') {
    var2 = var1;
} else {
    var2 = 'new';
}`

let var1;
let var2 = var1 || 'new';

//-------------------------------------//

`Declaring Variable Shorthand`

`let x1 = 123;
let y = 'Hello';
let z = [1,2,3];
`
let x1 = 123,
    y = 'Hello',
    z = [1,2,3];

//--------------------------------------//

`Arrow Function หลายๆ paramiters`
`
let addSync = function (a, b) {
    return a + b;
}
`
`let addSync = (a , b) => {return a + b};`

let addSync = (a, b) => a + b;
// ********** ถ้ามี parameter เดียว ไม่มีวงเล็บ เช่น
let add = a => a * a;

//-------------------------------------//

