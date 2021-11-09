import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function UserBadge({ user }) {
    const randomRating = () => {
        return Math.floor(Math.random() * (5 - 1 + 1) + 1) 
    }
    return (
        <div>
            <Avatar alt={user.first_name} src={user.avatar} />
            <Rating value={randomRating()} readOnly/>
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default UserBadge;
