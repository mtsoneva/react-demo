import React from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';


export default function HomePage() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <MainContent />
        </Box>
    )
}
