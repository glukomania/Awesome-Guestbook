import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite'

import TopPanel from './components/TopPanel'

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <TopPanel />
    </Container>
  )
}

export default App
