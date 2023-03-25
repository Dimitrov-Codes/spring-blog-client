"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var Post = function (props) {
    var post = props.post;
    return (<material_1.Grow in={true} {...{ timeout: props.timeout }}>
            <material_1.Paper sx={{ minWidth: "30%", padding: ".5rem 1rem 1rem", marginTop: "2rem" }} elevation={10}>
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
                <material_1.Typography>
                    {post.content}
                </material_1.Typography>
            </material_1.Paper>
        </material_1.Grow>);
};
exports.default = Post;
//# sourceMappingURL=Post.js.map