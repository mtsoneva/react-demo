import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ProductRating from './ProductRating';
import ProductTitle from './ProductTitle';
import { Link } from 'react-router-dom';
import ProductPrice from './ProductPrice';
import { makeStyles } from '@mui/styles';


function ProductCard({ item }) {
    const styles = useStyles();

    return (
        <Grid item >
            <Link to={`/product/${item.sku}`} className={styles.link}>
                <Card sx={{ maxWidth: 250, maxHeight: 400, p: 2 }} className={styles.card}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={item.image}
                        alt="image"
                        sx={{ maxWidth: 1, m: 'auto', objectFit: 'contain' }}
                    />
                    <CardContent className={styles.px0}>
                        <ProductTitle title={item.name} />
                    </CardContent>
                    <ProductRating rating={item.customerReviewAverage} ratingCount={item.customerReviewCount} />
                    <ProductPrice regularPrice={item.regularPrice} salePrice={item.salePrice} />
                </Card>
            </Link>
        </Grid>
    )
}

export default ProductCard;


const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },
    card: {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
    },
    px0: {
        paddingLeft: 0,
        paddingRight: 0
    }
})