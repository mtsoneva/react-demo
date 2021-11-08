import { makeStyles } from '@mui/styles';

function Availability({orderable}) {
    const styles = useStyles();

    return (
        <span className={styles.chip}>{orderable}</span>
    )
}

export default Availability;

const useStyles = makeStyles({
    chip: {
        backgroundColor: 'red',
        color: 'white',
        padding: '5px',
        borderRadius: '3px'
    }
})