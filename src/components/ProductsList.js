import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ProductsGrid from './ProductsGrid';

function ProductsList({ products, categoryName, isLoading }) {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 2, width: '100%' }}>
                <Toolbar />

                {isLoading
                    ? (
                        <div>
                            <CircularProgress />
                        </div>)
                    : (
                        <>
                        <ProductsGrid items={products.products} header={categoryName} />
                            {/* <div>
                                {products.products.map(prod => {
                                    return <div>{prod.name}</div>
                                })}
                            </div> */}
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default ProductsList;
