
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import axios from 'axios';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { toast } from 'react-toastify';

function AddReview() {
    const styles = useStyles();

    const [rating, setRating] = useState('');
    const [title, setTitle] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const review = {
        rating: rating,
        title: title,
        text: reviewText
        //TODO my user
    }

    const postReview = () => {
        setIsLoading(true);
        axios.post('http://httpbin.org/anything', review).then(() => {
            setRating('');
            setTitle('');
            setReviewText('');
            setIsLoading(false);
            toast.success("Your review is sent for approval", { hideProgressBar: true, });
        })
    }

    return (
        <>
            <AccordionDetails className={styles.section}>
                <Typography component="legend">Your Rating:</Typography>
                <Rating size="large"
                    value={rating}
                    onChange={handleRatingChange}
                    disabled={isLoading}
                    precision={0.5}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    value={title}
                    onChange={handleTitleChange}
                    className={styles.textField}
                    disabled={isLoading}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={6}
                    value={reviewText}
                    onChange={handleTextChange}
                    className={styles.textField}
                    required
                    disabled={isLoading}
                />
                <Button variant="contained" className={styles.btn} onClick={postReview} disabled={isLoading}>Post review</Button>
            </AccordionDetails>
        </>
    )
}

export default AddReview;

const useStyles = makeStyles({
    section: {
        borderTop: '1px solid grey',
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        marginTop: 10,
        marginBottom: 10,
        width: '75%'
    },
    btn: {
        width: 200
    }
})