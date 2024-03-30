import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./features/Input/inputSlice";
import listSlice from "./features/List/listSlice";
const store = configureStore({
  reducer: {
    input: inputSlice,
    list: listSlice,
  },
});
export default store;
