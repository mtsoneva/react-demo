import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/BestBuy_Logo.png';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
const Logo = styled('img')``;

function Navbar() {
    const num = useSelector(state => state.cart);
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Link to="/">
                    <Logo src={logo} alt="logo" sx={{ maxWidth: 80 }} />
                </Link>
                <div>
                    <Button color="inherit">
                        <Badge badgeContent={num} color="warning">
                            <ShoppingCartIcon />
                        </Badge>
                    </Button>
                    <Button color="inherit">Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
