import axios from "axios";

let arr = [];
let getData = axios.get('/homework1-4.json').then( (response) => {
  console.log(response);
  arr = getData;
})