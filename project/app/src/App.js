import './App.css';
import {useState} from 'react';
import { ToWords } from 'to-words';

function App() {
  const [output, showOutput] = useState('');
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

  const inWords = (e) => {
    let inputVal = toWords.convert(e.target.value, {currency: false});
    showOutput(inputVal);
  }

  return (
    <div className="App">
      test
     <form>
      <label>Please input your number</label> 
     <input type='number'  onChange={(e)=>inWords(e)}/>
     </form>

     <div>
      <p>{output}</p>
     </div>
    </div>
  );
}

export default App;
