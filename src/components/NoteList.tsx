import React from "react";
import styled from "styled-components";
import { Note } from "../types";
import NoteItem from "./NoteItem";

type NoteListProps = {
  notes: Note[];
  selectedId: number | null;
  setSelectedId: (id: number) => void;
};

const borderCondition = (
  notes: Note[],
  index: number,
  selectedId: number | null
) => {
  if (index === notes.length - 1) return false;
  if (selectedId === null) return true;
  if (notes[index].id === selectedId) return false;
  if (index < notes.length - 1 && notes[index + 1].id === selectedId)
    return false;
  return true;
};

const NoteList: React.FC<NoteListProps> = ({
  notes,
  selectedId,
  setSelectedId,
}) => {
  return (
    <NoteListBlock>
      {notes.map((note, index) => (
        <NoteItemWrapper key={note.id} onClick={() => setSelectedId(note.id)}>
          <NoteItem note={note} active={note.id === selectedId} />
          <NoteItemBorder visible={borderCondition(notes, index, selectedId)} />
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

type NoteItemBorderProps = {
  visible: boolean;
};

const NoteItemBorder = styled.div<NoteItemBorderProps>`
  width: 80%;
  height: 1px;
  background: ${(props) => (props.visible ? "#e6e6e6" : null)};
`;
