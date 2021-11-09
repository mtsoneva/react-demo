import { makeStyles } from '@mui/styles';

function Availability({ inStoreAvailability }) {
    const styles = useStyles();

    return (
        <>
            {inStoreAvailability && <span className={styles.chip}>In stock</span>}
        </>
    )
}

export default Availability;

const useStyles = makeStyles({
    chip: {
        backgroundColor: 'green',
        color: 'white',
        padding: '5px',
        borderRadius: '3px'
    }
})