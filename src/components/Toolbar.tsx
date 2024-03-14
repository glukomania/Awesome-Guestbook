import {useState} from 'react'
import { Button, Box } from '@mui/material'
import CustomCheckbox from './CustomCheckbox'

const Toolbar = () => {
    const [value, setValue] = useState(false)
    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            pl: 2,
        }}>
            <CustomCheckbox label={''} value={value} setValue={setValue}/>
            <Button variant="contained" color="error" size="medium" sx={{borderRadius: "30px", padding: '6px, 16px, 6px, 16px', height: '36px'}}>Remove</Button>
        </Box>
    )
}

export default Toolbar