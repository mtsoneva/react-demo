import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/BestBuy_Logo.png';
import { styled } from '@mui/material/styles';

const Logo = styled('img')``;

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Logo src={logo} alt="logo" sx={{ maxWidth: 80 }} />
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
