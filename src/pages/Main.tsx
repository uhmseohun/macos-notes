import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NoteList from "../components/NoteList";
import { RootState } from "../modules";

const MainPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <PageBlock>
      <NoteList
        notes={notes}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </PageBlock>
  );
};

export default MainPage;

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
