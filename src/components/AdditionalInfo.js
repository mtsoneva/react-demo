import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import Reviews from './Reviews';
import ProductRating from './ProductRating';
import AddReview from './AddReview';

function AdditionalInfo({ product }) {
    const styles = useStyles();

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Overview</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.section}>
                    <div className={styles.table}>
                        <div className={styles.leftCol}>
                            Description
                        </div>
                        <div className={styles.rightCol}>
                            {product.longDescription}
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails className={styles.section}>
                    <div className={styles.table}>
                        <div className={styles.leftCol}>
                            Features
                        </div>
                        <div className={styles.rightCol}>
                            <ul>
                                {product.features.map((feature, index) => {
                                    return <li key={index}>{feature.feature}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails className={styles.section}>
                    <div className={styles.table}>
                        <div className={styles.leftCol}>
                            What's included
                        </div>
                        <div className={styles.rightCol}>
                            <ul>
                                {product.includedItemList.map((item, index) => {
                                    return <li key={index}>{item.includedItem}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className={styles.dFlex}>
                            <span>Reviews </span>
                            <ProductRating rating={product.customerReviewAverage} ratingCount={product.customerReviewCount} />
                        </div>
                    </Typography>
                </AccordionSummary>
                <AddReview />
                <Reviews product={product} />
            </Accordion>
        </div>
    )
}

export default AdditionalInfo;

const useStyles = makeStyles({
    dFlex: {
        display: 'flex'
    },
    section: {
        borderTop: '1px solid #D9D9DB'
    },
    table: {
        display: 'flex'
    },
    leftCol: {
        flex: 1
    },
    rightCol: {
        flex: 2
    }
})