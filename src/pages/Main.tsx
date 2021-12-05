import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NoteEditor from "../components/NoteEditor";
import NoteList from "../components/NoteList";
import { RootState } from "../modules";

const MainPage: React.FC = () => {
  const { notes } = useSelector((state: RootState) => state);
  const [selectedId, setSelectedId] = useState<number | null>(
    notes.length ? 0 : null
  );

  return (
    <PageBlock>
      <NoteListWrapper>
        <NoteList
          notes={notes}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </NoteListWrapper>
      <NoteEditorWrapper>
        <NoteEditor id={selectedId} />
      </NoteEditorWrapper>
    </PageBlock>
  );
};

export default MainPage;

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const NoteListWrapper = styled.div`
  padding: 10px;
`;

const NoteEditorWrapper = styled.div`
  flex: 1;
`;
