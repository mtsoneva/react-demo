import { makeStyles } from '@mui/styles';

function ShippingOptions({ options }) {
    const styles = useStyles();

    return (
        <div>
            <h4>Shipping options</h4>
            <div className={styles.options}>
                {
                    options.map((option, i) => {
                        return (
                            <div>
                                <div key={option.serviceLevelId}>
                                    {option.serviceLevelName}
                                </div>
                                <span>
                                    {option.unitShippingPrice}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShippingOptions;

const useStyles = makeStyles({
    options: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})