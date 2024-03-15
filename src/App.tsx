import './App.css'
import {useEffect, useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import UserForm from './components/UserForm'
import UsersTable from './components/UsersTable'
import TopPanel from './components/TopPanel'
import { getTableData } from './utils/localStorage'
import { User } from './types/types'

function App() {


  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const userData = getTableData()
    setUsers(userData)
  }, [])

  useEffect(() => {
    console.log('App: users', users)
  }, [users])

  return (
    <Container maxWidth={false} disableGutters>
      <TopPanel />
      <Box sx={{display: 'flex', justifyContent: 'space-between', p: 4 }}>
        <Paper sx={{width: '400px', maxHeight: '430px', mr: 4, p: 3, borderRadius: 3, boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <UserForm setUsers={setUsers}/>
        </Paper>
        <Paper sx={{flexGrow: 1, borderRadius: 3, boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <UsersTable users={users} setUsers={setUsers}/>
        </Paper>
      </Box>
    </Container>
  )
}

export default App
