import { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ fetchProducts }) {
    const [searchQuery, setSearchQuery] = useState('');

    function onInputKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            fetchProducts(searchQuery);
        }
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
            <IconButton
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={() => { fetchProducts(searchQuery) }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
