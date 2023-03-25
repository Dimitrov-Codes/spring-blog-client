import {Container} from "@mui/material";
// @ts-ignore
import Header from "../Header/Header";
import {useEffect, useState} from "react";
import axios from "axios";
// @ts-ignore
import Post from "./Post.tsx";
import {PostItem} from "../../Utils/PostInterface";
// @ts-ignore
import bg from "../../assets/loginImage.jpg";
import {useNavigate} from "react-router-dom";
import {isTokenValid} from "../../Utils/TokenUtil"
import {v4 as uuidv4} from 'uuid';

export default function HomePage() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [posts, setPosts] = useState<PostItem[]>([])
    useEffect(() => {
        if (!isTokenValid(localStorage.getItem("token"))) {
            return navigate("/login");
        }
        axios.get("/api/posts/getAllPosts", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(response => {
                setPosts(response.data)
            })
            .catch(err => console.log(err.response.data));
    }, [token])
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundAttachment: "fixed"}}>
            <Header/>
            <Container sx={{padding: "0 0 3rem"}}>
                {posts.map((post, index) => {
                    return <Post key={uuidv4()} post={post} timeout={(index * 400) % 400}/>;
                })}
            </Container>
        </div>
    )
        ;
};