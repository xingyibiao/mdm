import { TaskStatusEnum } from "./enum";

// declare enum TaskStatusEnum {
//   NOT_DOWNLOAD,
//   DOWNLOADING,
//   DOWNLOADED
// }

interface ITaskItem {
  id: number;
  status: TaskStatusEnum;
  name: string;
  path?: string;
  progress: number; // 0-1
}
