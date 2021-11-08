import { Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';


function AddToCartBtn() {
    const styles = useStyles();

    return (
        <div>
            <Button variant="contained" startIcon={<ShoppingCartIcon />} className={styles.btn}>Add to cart</Button>
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
