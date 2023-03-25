import classes from "./Header.module.css";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const history = useNavigate();
    const handleLogout = (event) => {
        localStorage.removeItem("token")
        history("/login")
    }
    return (
        <div className={classes.container}>
            <h1>Pen and Post</h1>
            <Button className={classes.btn} color="error" onClick={handleLogout}
                    variant={"contained"} size={"large"}>Logout</Button>
        </div>
    )
}