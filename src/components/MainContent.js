import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Search from './Search';
import ProductsGrid from './ProductsGrid';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';


function MainContent() {
    const styles = useStyles();

    const dailyDealsApi = 'https://api.bestbuy.com/v1/products(offers.type=deal_of_the_day)?apiKey=U6193s76u8HnKmClJLZU4hRv&sort=name.asc&format=json';
    const dailyDealsHeader = 'Top Daily Deals';

    const trendingProductsApi = 'https://api.bestbuy.com/v1/products/mostViewed?apiKey=U6193s76u8HnKmClJLZU4hRv&sort=name.asc&format=json';
    const trendingProductsHeader = 'Trending products';

    const [isLoading, setIsLoading] = useState(false);

    const [dailyDeals, setDailyDeals] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {
        setIsLoading(true);
        axios.get(dailyDealsApi).then(result => {
            setDailyDeals(result.data.products);
            setIsLoading(false);
        });
    }, [dailyDealsApi])

    useEffect(() => {
        setIsLoading(true);
        axios.get(trendingProductsApi).then(result => {
            setIsLoading(false);

            setTrendingProducts(result.data.results.map(x => ({
                sku: x.sku,
                name: x.names.title,
                image: x.images.standard,
                customerReviewAverage:
                    x.customerReviews.averageScore,
                customerReviewCount: x.customerReviews.count,
                salePrice: x.prices.current,
                regularPrice: x.prices.regular
            })));
        })
    }, [trendingProductsApi])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 2, width: '100%' }}>
            <Toolbar />
            <Search />
            {isLoading
                ? (
                    <div className={styles.progressContainer}>
                        <CircularProgress />
                    </div>)
                : (
                    <>
                        <ProductsGrid items={trendingProducts} header={trendingProductsHeader} />
                        <ProductsGrid items={dailyDeals} header={dailyDealsHeader} />
                    </>
                )
            }
        </Box>
    )
}

export default MainContent;

const useStyles = makeStyles({
    progressContainer: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        '& span': {
            width: '100px!important',
            height: '100px!important'
        }
    }
})