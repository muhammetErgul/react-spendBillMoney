import { configureStore } from "@reduxjs/toolkit";
import nealSlice from "./nealSlice";

export default configureStore({
  reducer: {
    neal: nealSlice
  }
});
