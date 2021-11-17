import { useState } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import axios from 'axios';
import ProductsList from './ProductsList';

export default function HomePage() {
    const [products, setProducts] = useState(null);
    const [categoryName, setCategoryName] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    function fetchProductsByCategory(id, name) {
        setIsLoading(true);
        axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${id}))?apiKey=U6193s76u8HnKmClJLZU4hRv&format=json`)
            .then(res => {
                setProducts(res.data);
                setCategoryName(name)
                setIsLoading(false);

            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);

            });
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar fetchProducts={fetchProductsByCategory} />
            {products ? <ProductsList products={products} categoryName={categoryName} isLoading={isLoading} /> : <MainContent />}
        </Box>
    )
}
