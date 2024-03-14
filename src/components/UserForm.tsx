import React, {useState, useCallback} from 'react';
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
    const [department, setDepartment] = useState('Marketing')
    const [isAgree, setIsAgree] = useState(false)
    const [warningColor, setWarningColor] = useState('white')
    const [warningText, setWarningText] = useState('.')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('handleSubmit')

    };

    const resetForm = useCallback(() => {
        console.log('resetForm')
        setFullName('')
        setEmail('')
        setDepartment('Marketing')
        setWarningColor('white')
        setWarningText('.')
      },[])

    const validate = (value: string, type: string) => {
        switch (type){
            case 'name': 
                console.log('name validation')
                setWarningText('Full name field is incorrect. Please check.')
                setWarningColor('red')
                return false
            case 'email':
                console.log('email validataion')
                setWarningText('Email field is incorrect. Please check.')
                setWarningColor('red')
                return false
            default:
                console.log('unknown type')
                return true
        }
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <Typography variant="h6" >
            Add new visitor
        </Typography>
        <Typography variant="subtitle1">
            Fill name, email address and the department.
        </Typography>
        <Box sx={{mt: 2}}>
            <CustomInput label={'Full name'} value={fullName} setValue={setFullName}/>
            <CustomInput label={'Email address *'} value={email} setValue={setEmail}/>
        </Box>

        <CustomSelect label={department} value={department} setValue={setDepartment}/>
        <CustomCheckbox label={'I agree to be added to the table'} value={isAgree} setValue={setIsAgree}/>

        <Typography sx={{color: 'red', fontSize: 12, lineHeight: '5px', mt: 1}}>
            {warningText}
        </Typography>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 2, 
                width: '100%',
                mt: 2
            }}
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