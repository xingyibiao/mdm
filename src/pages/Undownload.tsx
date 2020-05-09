import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { continueOrPauseTask, deleteTask } from "../store";
import { TaskStatusEnum } from "../enum";

import { FlexBox, Colum } from "../styles";
import Icon from "../components/icon";

const UnDownLoadContainer = styled(Colum)`
  padding: 10px;
`;
const Header = styled.div`
  width: 400px;
  font-size: 16px;
  font-weight: bold;
`;

const UnDownLoadedItem = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const UnDownLoadedIcons = styled(FlexBox)`
  width: 60px;
  justify-content: space-around;
`;

export default function UnDownLoad() {
  const storeTasks = useSelector(state =>
    state.filter(item => item.status === TaskStatusEnum.NOT_DOWNLOAD)
  );

  const dispatch = useDispatch();

  function continueDown(id: number) {
    console.log(id);
    dispatch(continueOrPauseTask(id));
  }

  function delTask(id: number) {
    dispatch(deleteTask(id));
  }

  return (
    <UnDownLoadContainer>
      <Header>未下载</Header>
      {storeTasks.map(task => (
        <UnDownLoadedItem key={task.id}>
          <div>{task.name}</div>
          <UnDownLoadedIcons>
            <Icon name="bofang" onClick={() => continueDown(task.id)} />
            <Icon name="lajitong" onClick={() => delTask(task.id)} />
          </UnDownLoadedIcons>
        </UnDownLoadedItem>
      ))}
    </UnDownLoadContainer>
  );
}
