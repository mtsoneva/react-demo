import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard'

function ProductsGrid({ items, header }) {

    return (
        <>
            <h1>{header}</h1>
            <Grid container spacing={2}>
                {
                    items.map((item, i) => { return (<ProductCard key={item.sku} item={item} />) })
                }
            </Grid>
        </>
    )
}

export default ProductsGrid;
