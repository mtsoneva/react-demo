import { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import ProductImageGallery from './ProductImageGallery';
import CircularProgress from '@mui/material/CircularProgress';
import ProductDetails from './ProductDetails';


function Product() {
    const styles = useStyles();

    const { sku } = useParams();
    const [product, setProduct] = useState({ name: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.bestbuy.com/v1/products(sku=${sku})?format=json&apiKey=U6193s76u8HnKmClJLZU4hRv`).then(result => {
            setProduct(result.data.products[0]);
            setIsLoading(false);
        });
    }, [sku])

    return (
        <Container>
            <Toolbar />
            {isLoading
                ? (
                    <div className={styles.progressContainer}>
                        <CircularProgress />
                    </div>)
                : (
                    <>
                        <h1 className={styles.title}>{product.name}</h1>
                        <span>Product sku: {sku}</span>
                        <span>Product model: {product.modelNumber}</span>
                        <div className={styles.dFlex}>
                            <ProductImageGallery className={styles.gallery} images={product.images} />
                            <ProductDetails product={product} />
                        </div>
                    </>
                )
            }
        </Container>
    )
}

export default Product;

const useStyles = makeStyles({
    title: {
        fontSize: 28,
        fontWeight: 600
    },
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
        '& span': {
            width: '200px!important',
            height: '200px!important'
        }
    },
    gallery: {
        width: '50%'
    },
    dFlex: {
        display: 'flex'
    }
})
