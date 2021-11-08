import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';

function ProductRating({ rating, ratingCount }) {
    const classes = useStyles();

    return (
        <div className={classes.ratingRow}>
            <Rating name="read-only" value={rating} readOnly precision={0.1} />
            {rating} ({ratingCount})
        </div>
    )
}

export default ProductRating;

const useStyles = makeStyles({
    ratingRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
