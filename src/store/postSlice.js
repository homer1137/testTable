import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function(_, {rejectWithValue}) {
        try {
            const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!responce.ok) {
            throw new Error('Server Error!');
        }
        const data = await responce.json();

        return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
        
        
    }
)


const postSlice = createSlice({
    name: 'posts',
    initialState: {
         posts: [],
         status: null,
         error: null,
        
    },
    reducers: {
         searchPosts(state, action) {
           
           state.posts = state.posts.filter((item) => {
                 return(
                  item.body.toLowerCase().includes(action.payload.toLowerCase()) ||
                  item.title.toLowerCase().includes(action.payload.toLowerCase())
                );
              });
         },
         filterIdPosts(state, action) {},
         filterTitlePosts(state, action) {},
         filterBodyPosts(state, action) {},
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
    }
})

export const {searchPosts} = postSlice.actions;

export default postSlice.reducer;