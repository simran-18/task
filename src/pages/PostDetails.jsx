import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, clearSelectedPost } from "../redux/slices/postsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Button, Divider } from "@mui/material";
import BoxContainer from "../styles/BoxContainer.styles";
import Loader from "./Loader";

const PostDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selectedPost, loading } = useSelector((state) => state.posts);
    const navigate=useNavigate();
    useEffect(() => {
        dispatch(getPostById(id));
        return () => dispatch(clearSelectedPost());
    }, [dispatch, id]);

    if (loading) return <Loader/>;
    if (!selectedPost) return <Typography>No post found</Typography>;

    return (
        <BoxContainer>
            <div className="content">
                <Typography variant="h5">Post Details</Typography>
                <Divider sx={{ width: "100%",mb:2, borderBottomWidth: 2 }} />

                {/* Title Section */}
                <Typography variant="h6">Title</Typography>
                <Typography variant="body1">{selectedPost.title}</Typography>

                {/* Description Section */}
                <Typography variant="h6" sx={{ mt: 2 }}>Description</Typography>
                <Typography variant="body1">{selectedPost.body}</Typography>

                <div className="button-group" style={{ marginTop: "20px", display: "flex", gap: "10px" }}>        
                    <Button onClick={()=>navigate("/")} variant="contained">
                        View Posts
                    </Button>
                </div>
            </div>
        </BoxContainer>
    );
};

export default PostDetails;
