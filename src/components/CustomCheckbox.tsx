import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

type CustomCheckboxProps = {
  label: string,
  value: boolean,
  setValue: (arg: boolean) => void
}

const CustomCheckbox = (props: CustomCheckboxProps) => {  
  
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={props.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setValue(event.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label={props.label}
      />
    );
  }
  
  export default CustomCheckbox