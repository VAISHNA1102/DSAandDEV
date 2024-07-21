import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    tutorialUId: null,
};

const tutorialSlice = createSlice({
    name: "tutorial",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        }
    },
});

export const { setLoading, setTutorialUId, setSubSectionUId } = tutorialSlice.actions;
export default tutorialSlice.reducer;
