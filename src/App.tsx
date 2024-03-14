import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import UserForm from './components/UserForm'
import UsersTable from './components/UsersTable';

import TopPanel from './components/TopPanel'

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <TopPanel />
      <Box sx={{display: 'flex', justifyContent: 'space-between', p: 4 }}>
        <Paper sx={{width: '400px', maxHeight: '430px', mr: 4, p: 3, borderRadius: 3, boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <UserForm />
        </Paper>
        <Paper sx={{flexGrow: 1, borderRadius: 3, boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <UsersTable />
        </Paper>
      </Box>
    </Container>
  )
}

export default App
