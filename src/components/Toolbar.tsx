import { Button, Box } from '@mui/material';
import CustomCheckbox from './CustomCheckbox';

const Toolbar = () => {
    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            pl: 2,
        }}>
            <CustomCheckbox label={''} />
            <Button variant="contained" color="error" size="medium" sx={{borderRadius: "30px", padding: '6px, 16px, 6px, 16px', height: '36px'}}>Remove</Button>
        </Box>
    )
}

export default Toolbar