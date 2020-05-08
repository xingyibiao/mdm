import { createSlice } from "@reduxjs/toolkit";
import { TaskStatusEnum } from "../enum";

type RootStateType = ITaskItem[];

function changeTaskStatusById(
  state: RootStateType,
  { id, status }: { id: number; status: TaskStatusEnum }
): RootStateType {
  const len = state.length;
  let i = 0;
  for (i; i < len; i++) {
    const sId = state[i].id;
    if (sId === id) {
      state[i].status = status;
      break;
    }
  }
  return state;
}

function updateArrayItem<T = any>(arr: T[], i: number, item: T) {
  return [...arr.slice(0, i), item, ...arr.slice(i + 1)];
}

const rootSlice = createSlice<RootStateType, any>({
  name: "root",
  initialState: [],
  reducers: {
    updateStatus(
      state: RootStateType,
      { payload }: { payload: { id: number; status: TaskStatusEnum } }
    ) {
      const { id, status } = payload;
      state.forEach(item => {
        if (item.id === id) item.status = status;
      });
      return state;
    },
    addTask(
      state: RootStateType,
      { payload }: { payload: { task: ITaskItem } }
    ) {
      const { task } = payload;
      state.unshift(task);
      return state;
    },
    changeTaskStatus(
      state: RootStateType,
      { payload }: { payload: { id: number; status: TaskStatusEnum } }
    ) {
      const { id, status } = payload;

      return changeTaskStatusById(state, { id, status });
    },
    deleteTask(state: RootStateType, { payload }: { payload: number }) {
      return changeTaskStatusById(state, {
        id: payload,
        status: TaskStatusEnum.DELETED
      });
    },
    continueOrPauseTask(
      state: RootStateType,
      { payload }: { payload: number }
    ) {
      let index = -1;
      let status: TaskStatusEnum | null = null;
      const len = state.length;

      for (let i = 0; i < len; i++) {
        if (state[i].id === payload) {
          index = i;
          status = state[i].status;
          break;
        }
      }

      if (
        index === -1 ||
        (status !== TaskStatusEnum.DOWNLOADING &&
          status !== TaskStatusEnum.PAUSE)
      )
        return state;

      const newStatus =
        status === TaskStatusEnum.DOWNLOADING
          ? TaskStatusEnum.PAUSE
          : TaskStatusEnum.DOWNLOADING;
      // const newItem = state[index];
      // newItem.status = newStatus;

      return changeTaskStatusById(state, { id: payload, status: newStatus });
      // return updateArrayItem(state, index, newItem);
    },
    resetTask(state: RootStateType, { payload }: { payload: RootStateType }) {
      state = [...payload];
      return state;
    }
  }
});

export const {
  updateStatus,
  addTask,
  resetTask,
  deleteTask,
  changeTaskStatus,
  continueOrPauseTask
} = rootSlice.actions;

export default rootSlice.reducer;
