import { createSlice } from '@reduxjs/toolkit';
import fetchAdverts from './advert-operations';

const initialState = {
    adverts: {
        items: [],
        isLoading: false,
        error: null
    }
};
const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdverts.fulfilled, (state, action) => {
                state.adverts.isLoading = false;
                state.adverts.error = null;
                state.adverts.items = action.payload;
            }).addMatcher(action => action.type.endsWith('/pending'),
                (state) => {
                    state.adverts.isLoading = true;
                    state.adverts.error = null;
                })
            .addMatcher(action => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.adverts.isLoading = false;
                    state.adverts.error = action.error;
                })
    },
});
export default advertsSlice.reducer;