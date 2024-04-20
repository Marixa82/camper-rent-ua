import { createSelector } from "@reduxjs/toolkit";

const selectAdverts = state => state.adverts.adverts.items;
const selectIsLoading = state => state.adverts.adverts.isLoading;
const selectError = state => state.adverts.adverts.error;

export const selectAllAdverts = createSelector(
    [selectAdverts],
    (items) => {
        return items;
    }
);


const advertsSelector = {
    selectAdverts,
    selectError,
    selectIsLoading
};
export default advertsSelector;