import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/BestBuy_Logo.png';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Logo = styled('img')``;

function Navbar() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Link to="/">
                    <Logo src={logo} alt="logo" sx={{ maxWidth: 80 }} />
                </Link>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
