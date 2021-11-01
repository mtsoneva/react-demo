import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const [results, setResults] = useState({});

    const handleSearch = () => {
        getProducts();
    }
    const onInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    }

    const getProducts = () => {
        console.log(searchQuery);
        axios.get(`https://api.bestbuy.com/v1/products((search=${searchQuery}))?apiKey=U6193s76u8HnKmClJLZU4hRv&sort=name.asc&format=json`).then(response => {
            setResults(response.data)
        })
        console.log(results);
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search product"
                inputProps={{ 'aria-label': 'search product' }}
                onKeyPress={onInputKeyPress}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSearch} >
                <SearchIcon />
            </IconButton>
            {}
        </Paper>
    )
}
