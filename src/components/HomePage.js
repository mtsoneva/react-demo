import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import axios from 'axios';
import ProductsList from './ProductsList';
import { useNavigate, useLocation } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

const rootCategory = 'cat00000';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function HomePage() {
    const query = useQuery();
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const categoryId = query.get('categoryId');
    const page = query.get('page');
    const categoryName = query.get('categoryName');

    useEffect(() => {

        if (categoryId) {
            setIsLoading(true);
            axios.get(`https://api.bestbuy.com/v1/products((categoryPath.id=${categoryId}))?apiKey=U6193s76u8HnKmClJLZU4hRv&page=${page}&format=json`)
                .then(res => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        } else {
            setProducts(null);
        }
    }, [categoryId, page])

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar
                onCategoryChange={(id, name) => {
                    navigate(`/?categoryId=${id}&page=1&categoryName=${name}`)
                }}
                categoryId={rootCategory}
            />
            <div>
                <Toolbar />
                {products
                    ?
                    <>
                        <ProductsList
                            products={products}
                            categoryName={categoryName}
                            isLoading={isLoading}
                            changePage={(page) => { navigate(`/?categoryId=${categoryId}&page=${page}&categoryName=${categoryName}`) }}
                        />
                    </>
                    : <MainContent />
                }
            </div>
        </Box>
    )
}