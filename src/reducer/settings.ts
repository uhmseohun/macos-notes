const GOT_STARTED = "settings/GOT_STARTED" as const;

export const gotStarted = () => ({
  type: GOT_STARTED,
});

type Action = ReturnType<typeof gotStarted>;

type State = {
  getStarted: boolean;
};

const initialState: State = {
  getStarted: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GOT_STARTED:
      return {
        ...state,
        getStarted: true,
      };
    default:
      return state;
  }
};

export default reducer;
