import {Grow, Paper, Typography} from "@mui/material";
import {PostItem} from "../../Utils/PostInterface";

const Post = (props) => {
    const post: PostItem = props.post;
    return (
        <Grow in={true}  {...{timeout: props.timeout } }>
            <Paper sx={{minWidth: "30%", padding: ".5rem 1rem 1rem", marginTop: "2rem"}} elevation={10}>
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
                <Typography>
                    {post.content}
                </Typography>
            </Paper>
        </Grow>
    )

};
export default Post