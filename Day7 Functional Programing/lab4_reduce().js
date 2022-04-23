function reduce(arr, callbackFunction, initialize = null) {
    let result;
    let i;
    if (initialize == null) {
      result = arr[0];
      i = 1;
    } else {
      result = initialize;
      i = 0;
    }
    for (; i<arr.length; i++) {
      result = callbackFunction(result, arr[i]);
    }
    return result;
  }
  console.log(result);

  //----------------------------//

  const number = [10, 20, 30];
  const result = number.reduce((num, sum) => {
    return num + sum;
  }, 0);
  console.log(result); // 100

  `หมายเหตุ
  ถ้าไม่กำหนดค่า initialize 
  ค่า default จะเป็น null )`

  let arr = [50, 30, 20];
  let total = arr.reduce((num, sum) => {
    return num + sum;
  },0);
  console.log(total); //100


  // ============================== //

  `  Chaining คือการเอา method() arr มาเขียนเรียงต่อกัน 
      เช่น .filter .map .reduce `

