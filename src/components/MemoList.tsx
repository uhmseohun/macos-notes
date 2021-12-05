import React from "react";
import styled from "styled-components";
import { Memo } from "../types";
import MemoItem from "./MemoItem";

type MemoListProps = {
  memos: Memo[];
};

const MemoList: React.FC<MemoListProps> = ({ memos }) => {
  return (
    <MemoListBlock>
      {memos.map((memo, index) => (
        <MemoItemWrapper>
          <MemoItem key={index} memo={memo} active={false} />
          {index !== memos.length - 1 && <MemoItemBorder />}
        </MemoItemWrapper>
      ))}
    </MemoListBlock>
  );
};

export default MemoList;

const MemoListBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemoItemBorder = styled.div`
  width: 70%;
  height: 1px;
  background: #e6e6e6;
`;
