import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, clearSelectedUser } from "../redux/slices/usersSlice";
import { useParams } from "react-router-dom";
import { Typography, Button, Divider } from "@mui/material";
import BoxContainer from "../styles/BoxContainer.styles";
import Loader from "./Loader";

const UserDeatils = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { selectedUser, loading } = useSelector((state) => state.users);
    console.log("selectedUser::",selectedUser)
    useEffect(() => {
        dispatch(getUserById(id));
        return () => dispatch(clearSelectedUser());
    }, [dispatch, id]);

    if (loading) return <Loader />;
    if (!selectedUser) return <Typography>No user found</Typography>;

    return (
        <BoxContainer>
            <div className="content">
                <Typography variant="h5">User Details</Typography>
                <Divider sx={{ width: "100%",mb:2, borderBottomWidth: 2 }} />

                {/* Name Section */}
                <Typography variant="h6">Name</Typography>
                <Typography variant="body1">{selectedUser.name}</Typography>

                {/* Email Section */}
                <Typography variant="h6" sx={{ mt: 2 }}>Email</Typography>
                <Typography variant="body1">{selectedUser.email}</Typography>

                {/* Address Section */}
                <Typography variant="h6" sx={{ mt: 2 }}>Address</Typography>
                <Typography variant="body1">{selectedUser.address.city}</Typography>
                {/* Buttons */}
                <div className="button-group" style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                    <Button href="/" variant="contained">
                        View posts
                    </Button>
                </div>
            </div>
        </BoxContainer>
    );
};

export default UserDeatils;
