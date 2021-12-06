import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer";
import moment from "moment";
import { updateNote } from "../reducer/notes";

type NoteEditorProps = {
  id: null | number;
};

const splitContent = (content: string) => {
  const splitted = content.split("\n");
  if (splitted.length === 1) {
    return {
      title: content,
      content: "",
    };
  }
  return {
    title: splitted[0],
    content: splitted.slice(1).join("\n"),
  };
};

const NoteEditor: React.FC<NoteEditorProps> = ({ id }) => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) =>
    state.notes.find((note) => note.id === id)
  );
  const [content, setContent] = useState("");
  useEffect(() => {
    if (!note) return;
    const content = [note.title, note.content]
      .filter((v) => v !== "")
      .join("\n");
    setContent(content);
  }, [note]);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateNote(id!, {
        id: id!,
        lastEdited: new Date(),
        ...splitContent(event.target.value),
      })
    );
  };

  if (id === null) return null;

  return (
    <NoteEditorBlock>
      <NoteLastEdited>
        {moment(note!.lastEdited).format("LL LT")}
      </NoteLastEdited>
      <TextArea defaultValue={content} onChange={onChange} />
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
