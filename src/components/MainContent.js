import React from 'react'
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';


export default function MainContent() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <Toolbar />
            Main page content
        </Box>
    )
}
