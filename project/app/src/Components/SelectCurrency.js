import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function SelectCurrency(props) {
  const { currencyMenu, selectValue, onchangeCurrency, onchangeRate, resultValue} = props;
  
  return (
    <div>
      <Box>
        <TextField type={"number"} onChange={onchangeRate} value={resultValue}> </TextField>

        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
          <InputLabel id="demo-select-small">สกุลเงิน</InputLabel>

          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={selectValue}
            onChange={onchangeCurrency}
            label="Currency"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {currencyMenu.map((currencyMenu) => (
              <MenuItem key={currencyMenu} value={currencyMenu}>
                {currencyMenu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box></Box>
    </div>
  );
}

export default SelectCurrency;
