import { makeStyles } from '@mui/styles';

function ProductTitle({ title }) {

    const styles = useStyles();

    return (
        <div className={styles.title}>{title}</div>
    )
}

export default ProductTitle;
const useStyles = makeStyles({
    title: {
        lineHeight: '1.5em',
        height: '3em',
        overflow: 'hidden'
    }
})