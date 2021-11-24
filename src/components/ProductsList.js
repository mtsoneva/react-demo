import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ProductsGrid from './ProductsGrid';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';


function ProductsList({ products, categoryName, isLoading, changePage }) {
    const styles = useStyles();

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 2, width: '100%' }}>
                {isLoading
                    ? (
                        <div>
                            <CircularProgress />
                        </div>)
                    : (
                        <>
                            <ProductsGrid items={products.products} header={categoryName} />
                            <Pagination
                                count={products.totalPages}
                                page={products.currentPage}
                                onChange={(event, value) => { changePage(value) }}
                                color="primary"
                                className={styles.pagination}
                            />
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default ProductsList;

const useStyles = makeStyles({
    pagination: {
        marginTop: 20
    }
})
