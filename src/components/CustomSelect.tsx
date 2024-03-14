import { InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import { styled } from '@mui/system'

const CustomInputLabel = styled(InputLabel)({
  backgroundColor: 'white',
  paddingRight: '4px',
  paddingLeft: '4px',
});

type CustomInputProps = {
    label: string,
    value: string,
    setValue: (arg: string) => void
}

const CustomSelect = (props: CustomInputProps) => {

  return (
    <FormControl variant="outlined" fullWidth>
        <CustomInputLabel shrink htmlFor="custom-input">
            {props.label}
        </CustomInputLabel>
        <Select
            value={props.value}
            sx={{'& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid',
            borderColor: '#00000060',
            borderRadius: 1
            }, 
            padding: '0px, 12px, 0px, 12px', 
            mb: 3}}
            onChange={(event) => props.setValue(event.target.value as string)}
        >
            
            <MenuItem value={'Marketing'}>Marketing</MenuItem>
            <MenuItem value={'IT'}>IT</MenuItem>
            <MenuItem value={'Sales'}>Sales</MenuItem>
            <MenuItem value={'Management'}>Management</MenuItem>
            <MenuItem value={'Accounting'}>Accounting</MenuItem>
        </Select>
    </FormControl>
  );
}

export default CustomSelect