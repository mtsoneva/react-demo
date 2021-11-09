import { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import ProductImageGallery from './ProductImageGallery';
import CircularProgress from '@mui/material/CircularProgress';
import ProductDetails from './ProductDetails';
import AdditionalInfo from './AdditionalInfo';


function Product() {
    const styles = useStyles();

    const { sku } = useParams();
    const [product, setProduct] = useState({ name: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.bestbuy.com/v1/products/${sku}.json?apiKey=U6193s76u8HnKmClJLZU4hRv&format=json&show=sku,name,description,longDescription,shortDescription,categoryPath,images,modelNumber,customerReviewAverage,customerReviewCount,includedItemList,features,dollarSavings,regularPrice,salePrice,onSale,onlineAvailabilityText,thumbnailImage,mediumImage,largeImage,image,condition,shipping,manufacturer,inStoreAvailability`).then(result => {
            setProduct(result.data);
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
                        <AdditionalInfo product={product} />
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
