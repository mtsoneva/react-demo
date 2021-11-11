
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserBadge from './UserBadge';
import AccordionDetails from '@mui/material/AccordionDetails';


function Reviews({ product }) {
    const styles = useStyles();

    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?per_page=10`).then(result => {
            setUsers(result.data.data);
        });
    }, [product])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=6`).then(result => {
            setReviews(result.data);
        });
    }, [product])


    return (
        <>
            {reviews.length > 0 && users.map((user, index) => {
                return <AccordionDetails key={user.id} className={styles.section}>
                    <div className={styles.table}>
                        <div className={styles.leftCol}>
                            <UserBadge user={user} />
                        </div>

                        <div className={styles.rightCol}>
                            <h4>
                                {reviews[index].title}
                            </h4>
                            {reviews[index].body}
                        </div>
                    </div>
                </AccordionDetails>;
            })}
        </>
    )
}

export default Reviews;

const useStyles = makeStyles({
    mt: {
        marginTop: 10
    },
    section: {
        borderTop: '1px solid #D9D9DB',
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