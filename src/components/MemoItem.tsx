import React from "react";
import styled, { css } from "styled-components";
import { Memo } from "../types";

type MemoItemProps = {
  memo: Memo;
  active: boolean;
};

const MemoItem: React.FC<MemoItemProps> = ({ memo, active }) => {
  return (
    <MemoItemBlock active={active}>
      <MemoTitle>{memo.title}</MemoTitle>
      <MemoSecondaryLine>
        <MemoLastEditedAt>
          {memo.lastEdited.toLocaleDateString()}
        </MemoLastEditedAt>
        <MemoPreviewContent>{memo.content}</MemoPreviewContent>
      </MemoSecondaryLine>
      <MemoGroup>
        <Icon src={require(`../assets/icon/folder.png`).default} />
        메모
      </MemoGroup>
    </MemoItemBlock>
  );
};

export default MemoItem;

type MemoItemBlockProps = {
  active: boolean;
};

const MemoItemBlock = styled.div<MemoItemBlockProps>`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 10px;
  padding: 0.7em 1.2em;

  cursor: default;

  ${(props) =>
    props.active &&
    css`
      background: #fbe59c;
    `}
`;

const MemoTitle = styled.span`
  font-weight: 500;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

const MemoSecondaryLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemoLastEditedAt = styled.span`
  margin-right: 8px;
`;

const MemoPreviewContent = styled.span`
  color: #929191;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MemoGroup = styled.div`
  color: #929191;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 5px;
  height: 1em;
`;
