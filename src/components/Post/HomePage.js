"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
// @ts-ignore
var Header_tsx_1 = require("../Header/Header.tsx");
var react_1 = require("react");
var axios_1 = require("axios");
// @ts-ignore
var Post_tsx_1 = require("./Post.tsx");
// @ts-ignore
var loginImage_jpg_1 = require("../../assets/loginImage.jpg");
function HomePage() {
    var token = localStorage.getItem('token');
    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];
    (0, react_1.useEffect)(function () {
        axios_1.default.get("/api/posts/getAllPosts")
            .then(function (response) {
            setPosts(response.data);
        })
            .catch(function (err) { return console.log(err.response.data); });
    }, []);
    return (<div style={{ backgroundImage: "url(".concat(loginImage_jpg_1.default, ")"), backgroundSize: "contain", backgroundAttachment: "fixed" }}>
            <Header_tsx_1.default />
            <material_1.Container sx={{ padding: "0 0 3rem" }}>
                {posts.flatMap(function (post, index) {
            return <Post_tsx_1.default post={post} timeout={index * 500}/>;
        })}
            </material_1.Container>
        </div>);
}
exports.default = HomePage;
;
//# sourceMappingURL=HomePage.js.map