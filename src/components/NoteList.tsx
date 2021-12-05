import React from "react";
import styled from "styled-components";
import { Note } from "../types";
import NoteItem from "./NoteItem";

type NoteListProps = {
  notes: Note[];
};

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <NoteListBlock>
      {notes.map((note, index) => (
        <NoteItemWrapper key={note.id}>
          <NoteItem note={note} active={false} />
          {index !== notes.length - 1 && <NoteItemBorder />}
        </NoteItemWrapper>
      ))}
    </NoteListBlock>
  );
};

export default NoteList;

const NoteListBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoteItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoteItemBorder = styled.div`
  width: 70%;
  height: 1px;
  background: #e6e6e6;
`;
