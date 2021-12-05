import { Note } from "../types";

const REMOVE_NOTE = "notes/REMOVE_NOTE" as const;
const UPDATE_NOTE = "notes/UPDATE_NOTE" as const;
const CREATE_NOTE = "notes/CREATE_NOTE" as const;

export const removeNote = (id: number) => ({
  type: REMOVE_NOTE,
  id,
});

export const updateNote = (id: number, payload: Note) => ({
  type: UPDATE_NOTE,
  id,
  payload,
});

export const createNote = (payload: Note) => ({
  type: CREATE_NOTE,
  payload,
});

type Action =
  | ReturnType<typeof removeNote>
  | ReturnType<typeof updateNote>
  | ReturnType<typeof createNote>;

type State = Note[];

const initialState: State = JSON.parse(
  localStorage.getItem("notes") || "[]"
).map((note: Note) => ({ ...note, lastEdited: new Date(note.lastEdited) }));

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.id);
    case UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.id ? action.payload : note
      );
    case CREATE_NOTE:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default reducer;
