import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";
import moment from "moment";

type NoteEditorProps = {
  id: null | number;
};

const NoteEditor: React.FC<NoteEditorProps> = ({ id }) => {
  const note = useSelector((state: RootState) =>
    state.notes.find((note) => note.id === id)
  );

  if (id === null) return null;

  return (
    <NoteEditorBlock>
      <NoteLastEdited>
        {moment(note!.lastEdited).format("LL LT")}
      </NoteLastEdited>
      <TextArea>{note!.title + "\n" + note!.content}</TextArea>
    </NoteEditorBlock>
  );
};

export default NoteEditor;

const NoteEditorBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoteLastEdited = styled.span`
  color: #999999;
  font-size: 0.8em;
`;

const TextArea = styled.textarea`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  color: #656565;
  resize: none;
  background: none;
  font-size: 1.1em;
`;
