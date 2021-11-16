import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import CartItems from './CartItems';

function Cart() {
    const itemsInCart = useSelector(state => state.cart);

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let arr = [];
        setIsLoading(true);
        Promise.all(
            itemsInCart.map((item, index) => {
                return axios.get(
                    `https://api.bestbuy.com/v1/products/${item}.json?apiKey=U6193s76u8HnKmClJLZU4hRv&format=json&show=sku,name,dollarSavings,regularPrice,salePrice,image`
                );
            })
        )
            .then((result) => {
                result.forEach(item => {
                    if (arr[item.data.sku]) {
                        arr[item.data.sku].quantity++;
                    } else {
                        arr[item.data.sku] = item.data;
                        arr[item.data.sku].quantity = 1;
                    }
                })
                setList(arr);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsInCart]);

    return (
        <Container>
            <Toolbar />
            {isLoading
                ? (
                    <div >
                        <CircularProgress />
                    </div>)
                : (
                    <>
                        <CartItems items={list} />
                    </>
                )
            }
        </Container>
    )
}

export default Cart;
