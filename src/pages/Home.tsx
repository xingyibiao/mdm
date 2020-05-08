import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Progress from "../components/progress";
import Icon from "../components/icon";

import { deleteTask, continueOrPauseTask } from "../store";

import { TaskStatusEnum } from "../enum";

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

type PlayIconName = "bofang" | "bofangzanting";

function mapPlayIconName(status: TaskStatusEnum): PlayIconName {
  return status === TaskStatusEnum.PAUSE ? "bofang" : "bofangzanting";
}

export default function Home() {
  const storeTasks = useSelector<any, ITaskItem[]>(state =>
    state.filter(
      item =>
        item.status === TaskStatusEnum.DOWNLOADING ||
        item.status === TaskStatusEnum.PAUSE
    )
  );

  const dispatch = useDispatch();

  function delTask(id: number) {
    dispatch(deleteTask(id));
  }

  function playOrPause(id: number) {
    dispatch(continueOrPauseTask(id));
  }

  return (
    <HomeContainer>
      <HomeHeader>下载中</HomeHeader>
      <HomeContent>
        {storeTasks.map(task => (
          <TaskItem key={task.id}>
            <TaskItemTitle>
              <span>{task.name}</span>
              <TaskItemTitleRight>
                {task.status === TaskStatusEnum.DOWNLOADING ||
                task.status === TaskStatusEnum.PAUSE ? (
                  <Icon
                    name={mapPlayIconName(task.status)}
                    onClick={() => playOrPause(task.id)}
                  />
                ) : null}
                <Icon name="lajitong" onClick={() => delTask(task.id)} />
              </TaskItemTitleRight>
            </TaskItemTitle>
            <Progress ratio={task.progress} />
          </TaskItem>
        ))}
      </HomeContent>
    </HomeContainer>
  );
}
