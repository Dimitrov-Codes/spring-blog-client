import './App.css';
import LoginForm from "./components/Login/LoginForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Post/HomePage.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
