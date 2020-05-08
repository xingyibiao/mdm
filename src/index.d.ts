interface TaskEnum {}

interface ITaskItem {
  id: number;
  status: TaskEnum;
  name: string;
  path?: string;
}
