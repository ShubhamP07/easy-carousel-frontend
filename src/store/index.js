import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import photosSlice from "./photos-slice";
import carouselSlice from "./carousel-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    photos: photosSlice.reducer,
    carousel: carouselSlice.reducer,
  },
});

export default store;
