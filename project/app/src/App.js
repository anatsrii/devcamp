import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SelectCurrency from './Components/SelectCurrency';
// import ConvertInt from './Components/ConvertInt';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [currencyMenu, setCurrencytMenu] = useState([]);
  const [topCurrencyValue, setTopCurrencyValue] = useState('USD');
  const [bottomCurrencyValue, setBottomCurrencyValue] = useState('THB');

  const [topAmount, setTopAmount] = useState();
  const [bottomAmount, setBottomAmount] = useState();

  // const [topExchangerate, setTopExchangeRate] = useState(0);
  const [bottomExchangerate, setBottomExchangeRate] = useState();

  const onchangeTopValue = (e) => {
    let topValue = e.target.value;
    setTopAmount(topValue);
    setBottomAmount((topValue * bottomExchangerate).toFixed(2));
  }

  const onchangeBottomValue = (e) => {
    let bottomValue = e.target.value;
    setBottomAmount(bottomValue);
    setTopAmount((bottomValue / bottomExchangerate).toFixed(2));
  }

  
  

  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${topCurrencyValue}`;

  const receiveData = async () => {
    let mydata =  await axios.get(apiUrl);
    console.log(mydata.data.rates);
    setCurrencytMenu([...Object.keys(mydata.data.rates)]);
    // console.log(mydata.data.rates[topCurrencyValue]);
    // setTopExchangeRate(mydata.data.rates[topCurrencyValue]);
    console.log(mydata.data.rates[bottomCurrencyValue]);
    setBottomExchangeRate(mydata.data.rates[bottomCurrencyValue]);
  }
  
  useEffect( () => {
    receiveData();
  },[topCurrencyValue, bottomCurrencyValue]);
 
  return (
    <div className="App">
    
    <Container >
      <Box >
        <img src='/exchanging.png' alt='convert-money'/>
      </Box>

      <Box> 
        <SelectCurrency 
        currencyMenu={currencyMenu}
        selectValue={topCurrencyValue}
        onchangeCurrency={ (e) => setTopCurrencyValue (e.target.value)}
        onchangeRate={ (e) => onchangeTopValue(e)}
        resultValue={topAmount}
        /> 
      </Box>

      <Box> <h1> = </h1> </Box>

      <Box> 
        <SelectCurrency 
        currencyMenu={currencyMenu}
        selectValue={bottomCurrencyValue}
        onchangeCurrency={ (e)=> setBottomCurrencyValue(e.target.value)}
        onchangeRate={(e)=> onchangeBottomValue(e)}
        resultValue={bottomAmount}
        /> 
      </Box>
      
      {/* <Box>
        <ConvertInt />
      </Box> */}

    
    </Container>
    </div>
  );
}

export default App;
