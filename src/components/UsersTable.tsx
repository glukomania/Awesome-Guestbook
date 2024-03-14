import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import {Box, Chip, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';

import CustomInput from './CustonInput'
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox'

import Toolbar from './Toolbar'

const rows = [
    {
        id: 1,
        name: 'John Smith',
        email: 'smith@mail.com',
        department: 'Marketing'
    },
    {
        id: 2,
        name: 'Hiro Joice',
        email: 'joyce@mail.com',
        department: 'IT'
    },
    {
        id: 3,
        name: 'Lloyd Jefferson',
        email: 'jeff@mail.com',
        department: 'Sales'
    },
    {
        id: 4,
        name: 'John Smith',
        email: 'smith@mail.com',
        department: 'Management'
    },
    {
        id: 5,
        name: 'Hiro Joice',
        email: 'joyce@mail.com',
        department: 'IT'
    },
    {
        id: 6,
        name: 'Lloyd Jefferson',
        email: 'jeff@mail.com',
        department: 'Accounting'
    }

]

type Row = {
    id: number,
    name: string,
    email: string,
    department: string
}

const UsersTable = () => {

    const [selectedUsers, setSelectedUsers] = useState([])

    const renderDepartmentTagColor = (departmentName: string) => {
        let depColor = 'primary'
        switch (departmentName) {
            case 'Marketing': 
                depColor = '#2096f3'
                break
            case 'IT': 
                depColor = '#9C27B0'
                break
            case 'Sales':
                depColor = '#0188D1'
                break
            case 'Management':
                depColor = '#ef6c02'
                break
            case 'Accounting':
                depColor = '#2E7D32'
                break
            default: 
                depColor = 'primary'
                break
        }

        return(
            <Chip label={departmentName} size='medium' variant='filled' sx={{backgroundColor: depColor, color: 'white'}} />
        )
    }

    const renderRow = (rowData: Row) => {
        const getCheckboxValue = () => {
            return false
        }

        const handleChecking = () => {
            console.log('add logic of checking')
        }

        return(
            <TableRow 
                key={rowData.id} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell sx={{maxWidth: 8}}>
                    <CustomCheckbox label='' value={getCheckboxValue()} setValue={handleChecking}/>
                </TableCell>
                <TableCell component="th" scope="row">
                {rowData.name}
                </TableCell>
                <TableCell>{rowData.email}</TableCell>
                <TableCell align="right">{renderDepartmentTagColor(rowData.department)}</TableCell>
            </TableRow>
        )
    }

    return (
    <Box>
        <Typography variant="h6" sx={{p: 3, pl: 2}}>
            Add new visitor
        </Typography>
        <Toolbar />

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="right">Department</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(renderRow)}
            </TableBody>
        </Table>

    </Box> 
    )
}


export default UsersTable