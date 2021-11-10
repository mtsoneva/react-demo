import { Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { add } from '../actions';
import { useDispatch } from 'react-redux';

function AddToCartBtn() {
    const styles = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                className={styles.btn}
                onClick={() => dispatch(add())}
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
