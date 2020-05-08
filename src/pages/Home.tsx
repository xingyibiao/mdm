import React, { useState } from "react";
import styled from "styled-components";

import Progress from "../components/progress";
import Icon from "../components/icon";

const FlexBox = styled.div`
  display: flex;
`;

const Colum = styled(FlexBox)`
  flex-direction: column;
`;

const HomeContainer = styled(Colum)``;

const HomeHeader = styled(FlexBox)`
  font-size: 16px;
  font-weight: bold;
  padding: 20px 10px;
`;

const HomeContent = styled(Colum)``;

const TaskItem = styled(Colum)`
  color: #333;
`;

const TaskItemTitle = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

const TaskItemTitleRight = styled(FlexBox)`
  width: 80px;
  justify-content: space-around;
  font-size: 8px;
`;

type ITaskItem = {
  id: number;
  progress: number; // 0-1
  title: string;
};

const mockTasks: ITaskItem[] = [
  {
    id: 1,
    progress: 0.5,
    title: "下载1"
  },
  {
    id: 2,
    progress: 0.6,
    title: "下载2"
  },
  {
    id: 3,
    progress: 0.4,
    title: "下载3"
  },
  {
    id: 4,
    progress: 0.3,
    title: "下载4"
  },
  {
    id: 5,
    progress: 0.7,
    title: "下载5"
  },
  {
    id: 6,
    progress: 0.9,
    title: "下载6"
  }
];

export default function Home() {
  const [tasks, setTasks] = useState<ITaskItem[]>(mockTasks);

  return (
    <HomeContainer>
      <HomeHeader>下载中</HomeHeader>
      <HomeContent>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <TaskItemTitle>
              <span>{task.title}</span>
              <TaskItemTitleRight>
                <Icon name="bofang" />
                <Icon name="lajitong" />
              </TaskItemTitleRight>
            </TaskItemTitle>
            <Progress ratio={task.progress} />
          </TaskItem>
        ))}
      </HomeContent>
    </HomeContainer>
  );
}
