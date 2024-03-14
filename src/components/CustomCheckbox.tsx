import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

type CustomCheckboxProps = {
  label: string
}

const CustomCheckbox = (props: CustomCheckboxProps) => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label={props.label}
      />
    );
  }
  
  export default CustomCheckbox;