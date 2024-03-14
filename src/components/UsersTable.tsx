import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import {Box, Chip, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import CustomCheckbox from './CustomCheckbox'
import Toolbar from './Toolbar'
import { User } from '../types/types'


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


type UserProps = {
    users: User[]
}

const UsersTable = (props: UserProps) => {

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

    const renderRow = (rowData: User) => {
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
                {rowData.fullName}
                </TableCell>
                <TableCell>{rowData.email}</TableCell>
                <TableCell align="right">{renderDepartmentTagColor(rowData.department)}</TableCell>
            </TableRow>
        )
    }

    useEffect(() => {
        console.log('props.users', props.users)
    }, [props.users])

    return (
        props.users ? (<Box>
        <Typography variant="h6" sx={{p: 3, pl: 2}}>
            Visitor management
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
                {props.users && props.users.map(renderRow)}
            </TableBody>
        </Table>

    </Box> ) : (
        <Box>
        <Typography variant="h6" sx={{p: 3, pl: 2}}>
            Visitor management
        </Typography>

        <Typography variant="h6" sx={{p: 3, pl: 2, color: 'lightGrey'}}>
            No users yet
        </Typography>


    </Box> 
    )
    )
}


export default UsersTable