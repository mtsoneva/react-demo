import { Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { addToCart } from '../actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function AddToCartBtn({ sku, name }) {
    const styles = useStyles();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(sku));
        toast.success(`${name} has been added to the cart`, { hideProgressBar: true, });
    }

    return (
        <div>
            <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                className={styles.btn}
                onClick={handleAddToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default AddToCartBtn;

const useStyles = makeStyles({
    btn: {
        backgroundColor: "#FFE000",
        color: "black",
        width: 200,
        "&:hover": {
            backgroundColor: "#FFF200",
        }
    }
})
