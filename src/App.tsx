import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import UserForm from './components/UserForm'

import TopPanel from './components/TopPanel'

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <TopPanel />
      <Box sx={{display: 'flex', justifyContent: 'space-between', p: 4, }}>
          <Box sx={{width: '400px', mr: 4, p: 3, borderRadius: 3, boxShadow: '0 0 10px rgba(0,0,0,0.2)'  }}>
            <UserForm />
          </Box>
        <Box sx={{backgroundColor: 'purple', flexGrow: 1}}>
            <UserForm />
        </Box>
      </Box>
    </Container>
  )
}

export default App
