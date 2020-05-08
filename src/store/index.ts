import { createSlice } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux'

const rootSlice = createSlice({
  name: "root",
  initialState: [],
  reducers: {
    updateStatus: (
      state: ITaskItem[],
      { payload }: { payload: { id: number; statue: TaskEnum } }
    ) => {
      const { id, status } = payload;
      state.forEach(item => {
        if (item.id === id) item.status = status;
      });
    },
    addTask: (
      state: ITaskItem[],
      { payload }: { payload: { task: ITaskItem } }
    ) => {
      const { task } = payload;
      state.unshift(task);
    }
  }
});

export const { updateStatus, addTask } = rootSlice.actions;

export default rootSlice.reducer;
