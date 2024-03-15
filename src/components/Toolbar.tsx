import {useEffect, useState} from 'react'
import { Button, Box } from '@mui/material'
import CustomCheckbox from './CustomCheckbox'
import {deleteUsers, getTableData} from '../utils/localStorage'
import {User} from '../types/types'

type ToolbarProps = {
    setSelectedUsers: (arg: number[])=> void,
    selectedUsers: number[],
    allusers: User[],
    setUsers: (arg: User[]) => void
}

const Toolbar = (props: ToolbarProps) => {
    const [value, setValue] = useState(false)

    const handleRemoveClick = () => {
        deleteUsers(props.selectedUsers)
        props.setSelectedUsers([])
        props.setUsers(getTableData())
    }

    const handleSelectAll = (isChecked: boolean) => {
        if (isChecked) {
            const ids = props.allusers.map(user => user.id);

            props.setSelectedUsers(ids)
            setValue(true)
        } else {
            props.setSelectedUsers([])
            setValue(false)
        }
    }

    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            pl: 2,
        }}>
            <CustomCheckbox label={''} value={value} setValue={handleSelectAll}/>
            <Button 
                variant="contained" 
                color="error" 
                size="medium" 
                onClick={handleRemoveClick}
                sx={{borderRadius: "30px", padding: '6px, 16px, 6px, 16px', height: '36px'}}
            >
                    Remove
            </Button>
        </Box>
    )
}

export default Toolbar