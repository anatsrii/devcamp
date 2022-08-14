import { ToWords } from 'to-words';
import { useState } from 'react';
function ConvertInt () {
    // ---------Convert Number to words--------- // 
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
    //------------------------ --------------//
    
  return (
   <div>
     {/* Convert number to words */}

    <form>
      <label>Please input your number</label> 
     <input type='number'  onChange={(e)=>inWords(e)}/>
    </form>

      <div>
    <p>{output}</p>
   </div>

    {/* End convert number to words */}
   </div>
  )
}

export default ConvertInt;