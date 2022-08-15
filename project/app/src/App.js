import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SelectCurrency from './Components/SelectCurrency';
import { ToWords } from 'to-words';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //--------------- Exchange State----------//
  const [currencyMenu, setCurrencytMenu] = useState([]);
  const [topCurrencyValue, setTopCurrencyValue] = useState('USD');
  const [bottomCurrencyValue, setBottomCurrencyValue] = useState('THB');

  const [topAmount, setTopAmount] = useState();
  const [bottomAmount, setBottomAmount] = useState();

  const [bottomExchangerate, setBottomExchangeRate] = useState();
  //-------------- End Exchange State----------------//


  //-------------- ConvertInt State------------------//
  const [convertIntValue, setConvertIntValue] = useState('');
  //-------------------------------------------------//

  // ---------Convert Number to words--------- // 
  const toWords = new ToWords({
    localeCode: 'en-US',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        name: 'Dollar',
      plural: 'Dollar',
      symbol: '$'
    }
    // can be used to override defaults for the selected locale
    // name: 'Rupee',
    // plural: 'Rupees',
    // symbol: '₹',
    // fractionalUnit: {
      //   name: 'Paisa',
      //   plural: 'Paise',
      //   symbol: '',
      // },
    }
  });

  

  const onchangeTopValue = (e) => {
    let topValue = e.target.value;
    setTopAmount(topValue);
    setBottomAmount((topValue * bottomExchangerate).toFixed(2));
    setConvertIntValue(toWords.convert(e.target.value, {currency: false}));
  }

  const onchangeBottomValue = (e) => {
    let bottomValue = e.target.value;
    setBottomAmount(bottomValue);
    setTopAmount((bottomValue / bottomExchangerate).toFixed(2));
    console.log(topCurrencyValue)
  }


  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${topCurrencyValue}`;

  const receiveData = async () => {
    let mydata =  await axios.get(apiUrl);
    // console.log(mydata.data.rates);
    setCurrencytMenu([...Object.keys(mydata.data.rates)]);
    // console.log(mydata.data.rates[topCurrencyValue]);
    // console.log(mydata.data.rates[bottomCurrencyValue]);
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
        onchangeCurrency={ (e) => setTopCurrencyValue(e.target.value)}
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
      
      <Box>
        <p>{convertIntValue}</p>
      </Box>

    
    </Container>
    </div>
  );
}

export default App;
