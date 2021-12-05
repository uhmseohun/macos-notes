import React from "react";
import styled, { css } from "styled-components";
import { Note } from "../types";

type NoteItemProps = {
  note: Note;
  active: boolean;
};

const NoteItem: React.FC<NoteItemProps> = ({ note, active }) => {
  return (
    <NoteItemBlock active={active}>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteSecondaryLine>
        <NoteLastEditedAt>
          {note.lastEdited.toLocaleDateString()}
        </NoteLastEditedAt>
        <NotePreviewContent>{note.content}</NotePreviewContent>
      </NoteSecondaryLine>
      <NoteGroup>
        <Icon src={require(`../assets/icon/folder.png`).default} />
        메모
      </NoteGroup>
    </NoteItemBlock>
  );
};

export default NoteItem;

type NoteItemBlockProps = {
  active: boolean;
};

const NoteItemBlock = styled.div<NoteItemBlockProps>`
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

const NoteTitle = styled.span`
  font-weight: 500;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

const NoteSecondaryLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const NoteLastEditedAt = styled.span`
  margin-right: 8px;
`;

const NotePreviewContent = styled.span`
  color: #929191;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoteGroup = styled.div`
  color: #929191;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 5px;
  height: 1em;
`;
