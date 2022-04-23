`array.filter`

let arr1 = [
    {Fname: 'Somchai', Lname: 'Rakdee', Age: 30}, 
    {Fname: 'Sompong', Lname: 'Rakthai', Age: 35},
    {Fname: 'Sommai', Lname: 'Raksuay', Age: 25}
]

let arr = arr1.filter((obj) => {
    return obj.Age >= 30;
});
console.log(arr);
//////======================================//////

let array = [
    {name: 'a', age: 10},
    {name: 'b', age: 12},
    {name: 'c', age: 13},
    {name: 'd', age: 20}
]

let target = array.filter((obj) => {
    return obj.name == 'd';
})
console.log(target);