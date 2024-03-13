import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite'


 const TopPanel = () => {
  return (
    <Box
        sx={{
        bgcolor: '#EF5742', 
        color: 'white',
        p: 2, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 32,
        }}
    >
        <FavoriteIcon sx={{ fontSize: '24px' }}/>
        <Typography variant="h6" sx={{ marginLeft: '10px'}}>
            Application
        </Typography>
    </Box>
  )
}


export default TopPanel
