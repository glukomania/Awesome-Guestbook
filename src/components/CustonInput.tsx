import React from 'react'
import { TextField, InputLabel, FormControl } from '@mui/material'
import { styled } from '@mui/system'

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00000060',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

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

function CustomInput(props: CustomInputProps) {
  return (
    <FormControl variant="outlined" sx={{ width: '100%' }}>
      <CustomInputLabel shrink htmlFor="custom-input">
        {props.label}
      </CustomInputLabel>
      <CustomTextField
        id="custom-input"
        variant="outlined"
        sx={{'& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid',
            borderColor: '#00000060',
            borderRadius: 1
          }, padding: '0px, 12px, 0px, 12px',
        mb: 3}}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
      />
    </FormControl>
  );
}

export default CustomInput