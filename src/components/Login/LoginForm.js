import classes from "./LoginForm.module.css"
import {Button, FormControl, Grow, Input, InputLabel, Paper} from "@mui/material";
import {useRef} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (event) => {
        event.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value;
         console.log(username + " " + password);
        const data = {
            "usernameOrEmail": username,
            "password": password
        }
        axios.post("/api/auth/login",
            data,
            {headers: {"Content-Type": "application/json"}})
            .then(response => {
                localStorage.setItem("token", response.data.accessToken);
                navigate("/")
            })
            .catch(err => console.log(err.response.data));

    }
    return (
        <div className={classes.background}>
            <Grow in={true} style={{ transformOrigin: 'center' }} {...{timeout: 400 } }>
                <Paper className={classes.form} elevation={20}>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="usernameOrEmail" className={classes.label}>Username or
                                E-mail</InputLabel>
                            <Input required className={classes.input}
                                   inputRef={usernameRef} id="usernameOrEmail"/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="password" className={classes.label}>Password</InputLabel>
                            <Input required className={classes.input}
                                   inputRef={passwordRef} id="password"
                                   type="password"/>
                        </FormControl>
                        <Button variant="contained" type={"submit"}
                                sx={{
                                    width: "100%",
                                    padding: ".6rem",
                                    margin: "1.3rem 0",
                                    fontSize: "1.2rem"
                                }}>Submit</Button>
                    </form>
                </Paper>
            </Grow>
        </div>
    )
        ;
};
export default LoginForm;