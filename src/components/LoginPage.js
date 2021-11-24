import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const styles = useStyles();
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true);
        axios.get('http://httpbin.org/status/200,400', {
            email,
            password
        })
            .then(res => {
                setLoginError(null);
                setIsLoading(false);
                navigate("/");
            }).catch(err => {
                setLoginError("Wrong username or password.")
                setIsLoading(false);
            })
    }
    return (
        <Container>
            <Toolbar />
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                    required
                    type="email"
                    margin="normal"
                    variant="standard"
                />
                <TextField
                    id="pass"
                    label="Password"
                    value={password}
                    onChange={e => { setPassword(e.target.value) }}
                    required
                    type='password'
                    margin="normal"
                    variant="standard"
                />
                {loginError &&
                    <div className={styles.error}>
                        {loginError}
                    </div>
                }
                <LoadingButton loading={isLoading} variant="contained" type='submit'>Login</LoadingButton>
            </form>
        </Container>
    )
}

export default LoginPage;
const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto'
    },
    error: {
        color: 'red',
        marginBottom: 10
    }
})