import { makeStyles } from '@mui/styles';


function ProductPrice({ regularPrice, salePrice }) {

    const onSale = regularPrice > salePrice ? true : false;
    const classes = useStyles({ onSale });

    return (
        <div>
            <div className={classes.regularPrice}>
                {onSale && <span >${regularPrice}</span>}
            </div>
            <div className={classes.promoPrice}>
                ${salePrice}
            </div>
        </div>
    )
}

export default ProductPrice;


const useStyles = makeStyles({
    promoPrice: {
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        color: props => props.onSale
            ? 'red'
            : '',
        fontWeight: props => props.onSale
            ? 'bold'
            : ''
    },
    regularPrice: {
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'line-through',
        height: 24
    }
})