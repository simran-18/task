import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/postsSlice";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, CircularProgress, MenuItem, Checkbox, InputAdornment, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../styles/StyledLink.styles";
import {
    Container,
    StyledPaper,
    FiltersContainer,
    SearchField,
    StyledSelect,
    DataGridWrapper,
    LoadingContainer,
} from "../styles/PostsTable.styles";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "../hooks/useDebounce";

const PostsTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { posts, loading, error } = useSelector((state) => state.posts);

    const [searchTerm, setSearchTerm] = useState("");
    const [userIdFilter, setUserIdFilter] = useState([]); // Multi-select state
    const debouncedTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts()); 
          }
    }, [dispatch, posts.length]);

    // Handle User ID Selection (Multi-Select)
    const handleUserIdChange = (event) => {
        const value = event.target.value;
        setUserIdFilter(value.includes("") ? [] : value); // Clear all selections if "All Users" is selected
    };

    // Define columns
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 70,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => <StyledLink to={`/post/${params.row.id}`}>{params.row.id}</StyledLink>,
        },
        {
            field: "userId",
            headerName: "User ID",
            width: 100,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => <StyledLink to={`/user/${params.row.userId}`}>{params.row.userId}</StyledLink>,
        },
        { field: "title", headerName: "Title", width: 250, headerAlign: "center" },
        { field: "body", headerName: "Description", width: 600, headerAlign: "center" },
    ];

    // Apply search and filter logic
    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(debouncedTerm?.toLowerCase()) &&
            (userIdFilter.length === 0 || userIdFilter.includes(post.userId))
    );
  
    return (
        <Container>
            <StyledPaper elevation={3}>
                <Typography variant="h4" align="center" fontWeight={600} color="primary" mb={2}>
                    Posts Dashboard
                </Typography>

                {/* Search and Filter Inputs */}
                <FiltersContainer>
                    <SearchField
                        label="Search by Title"
                        variant="outlined"
                        size="small"
                        value={searchTerm}
                        placeholder="Search in the table on the basis of title"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Multi-Select User Filter */}
                    <StyledSelect
                        multiple
                        value={userIdFilter}
                        onChange={handleUserIdChange}
                        displayEmpty
                        size="small"
                        renderValue={(selected) =>
                            selected.length > 0 ? selected.join(", ") : "All Users"
                        }
                    >
                        <MenuItem value="">
                            <em>All Users</em>
                        </MenuItem>
                        {[...new Set(posts.map((post) => post.userId))].map((id) => (
                            <MenuItem key={id} value={id}>
                                <Checkbox checked={userIdFilter.includes(id)} />
                                <ListItemText primary={`User ${id}`} />
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FiltersContainer>

                {/* Loading, Error, and Data Grid */}
                <DataGridWrapper>
                    {loading ? (
                        <LoadingContainer>
                            <CircularProgress size={40} />
                        </LoadingContainer>
                    ) : error ? (
                        <Typography align="center" color="error">
                            Error: {error}
                        </Typography>
                    ) : (
                        <DataGrid
                            rows={filteredPosts}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 20]}
                            disableSelectionOnClick
                            onRowClick={(params) => navigate(`/post/${params.id}`)}
                            sx={{
                                borderRadius: 2,
                                height: "100%",
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#eeeeee",
                                    fontWeight: "bold",
                                    color: "#333",
                                },
                                "& .MuiDataGrid-row:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                                "& .MuiDataGrid-cell": { cursor: "pointer" },
                                "& .MuiDataGrid-row:hover": { backgroundColor: "#e3f2fd" },
                            }}
                        />
                    )}
                </DataGridWrapper>
            </StyledPaper>
        </Container>
    );
};

export default PostsTable;
