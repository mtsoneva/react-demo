import React from 'react'
import Box from '@mui/material/Box';


import Toolbar from '@mui/material/Toolbar';
import Search from './Search';


export default function MainContent() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 2 }}>
            <Toolbar />
            <Search />
        </Box>
    )
}
