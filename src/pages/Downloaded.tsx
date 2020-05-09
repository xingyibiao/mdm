import React, { FC } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Icon from "../components/icon";

import { TaskStatusEnum } from "../enum";

import { FlexBox, Colum } from "../styles";
import { deleteTask } from "../store";

const DownLoadedContainer = styled(Colum)`
  width: 400px;
  padding: 10px;
`;

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const DownLoadedItem = styled(FlexBox)`
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

const DownLoadedIcons = styled(FlexBox)`
  width: 60px;
  justify-content: space-around;
`;

const DownLoaded: FC = () => {
  const storeTasks = useSelector(state =>
    state.filter(item => item.status === TaskStatusEnum.DOWNLOADED)
  );

  const dispatch = useDispatch();

  function delTask(id: number) {
    dispatch(deleteTask(id));
  }

  function openDir(id: number) {
    const { path } = storeTasks.filter(item => item.id === id)[0];

    if (!path) return;

    console.log(path);
  }

  function openFile(id: number) {
    const { path } = storeTasks.filter(item => item.id === id)[0];

    if (!path) return;

    console.log("open file", path);
  }

  return (
    <DownLoadedContainer>
      <Header>已完成</Header>
      {storeTasks.map(task => (
        <DownLoadedItem>
          <div>{task.name}</div>
          <DownLoadedIcons>
            <Icon name="tuzu" onClick={() => openFile(task.id)} />
            <Icon name="changjingmoren" onClick={() => openDir(task.id)} />
            <Icon name="lajitong" onClick={() => delTask(task.id)} />
          </DownLoadedIcons>
        </DownLoadedItem>
      ))}
    </DownLoadedContainer>
  );
};

export default DownLoaded;
