`array.map`

let arr = [
    {Fname: 'Somchai', Lname: 'Rakdee', Age: 30}, 
    {Fname: 'Sompong', Lname: 'Rakthai', Age: 35},
    {Fname: 'Sommai', Lname: 'Raksuay', Age: 25}
]

let arr1 = arr.map((obj)=> 'First name is:' + obj.Fname + 'Lastname is:' + obj.Lname + 'Age =' + obj.Age);
console.log(arr1[1]);

// ต้องใส่ ปีกกา + return ด้วยจะอ่านง่าย แต่เขียนแบบนี้ ก็ได้แหละ 