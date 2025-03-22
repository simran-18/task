import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch user details
export const getUserById = createAsyncThunk("user/getUserById", async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return await response.json();
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        selectedUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.selectedUser = action.payload;
                state.loading = false;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
