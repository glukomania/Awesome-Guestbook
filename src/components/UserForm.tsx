import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import {Box, Button} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';



import CustomInput from './CustonInput'
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox'


const UserForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('handleSubmit')

    };

    const resetForm = () => {
        console.log('resetForm')
      };
    
      const addNewVisitor = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('addNewVisitor')
    };

    return (
    <form onSubmit={handleSubmit}>
        <Typography variant="h6" >
            Add new visitor
        </Typography>
        <Typography variant="subtitle1">
            Fill name, email address and the department.
        </Typography>
        <Box sx={{mt: 2}}>
            <CustomInput label={'Full name'}/>
            <CustomInput label={'Email address *'}/>
        </Box>

        <CustomSelect label={'Department'} />
        <CustomCheckbox label={'I agree to be added to the table'} />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 2, 
                width: '100%',            }}
            >
            <Button 
                variant="outlined" 
                color="primary" 
                startIcon={<HistoryIcon />} 
                size="medium" sx={{
                    borderRadius: 10,
                    width: '155px',
                    height: 48,
                    borderColor: '#EF5742',
                    color: '#EF5742'
                }}
                onClick={resetForm}
                >
                    Reset form
            </Button>
            <Button 
                variant="contained" 
                type="submit" 
                startIcon={<PersonIcon />}
                sx={{
                    width: '247px',
                    borderRadius: 10,
                    height: 48,
                    backgroundColor: '#EF5742',
                    color: 'white'
                }}>
                    Add new visitor
            </Button>
        </Box>
    </form>
    )
}


export default UserForm