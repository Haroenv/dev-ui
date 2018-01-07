const initialState = {
  terminal: false,
};

const TOGGLE_TERMINAL = 'TOGGLE_TERMINAL';
const SHOW_TERMINAL = 'SHOW_TERMINAL';
const HIDE_TERMINAL = 'HIDE_TERMINAL';

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_TERMINAL:
      return {
        ...state,
        terminal: !!state.showTerminal,
      };
    case SHOW_TERMINAL:
      return {
        ...state,
        terminal: true,
      };
    case HIDE_TERMINAL:
      return {
        ...state,
        terminal: false,
      };
    default:
      return state;
  }
};

export const actions = {
  toggleTerminal: () => ({
    type: TOGGLE_TERMINAL,
  }),
  showTerminal: () => ({
    type: SHOW_TERMINAL,
  }),
  hideTerminal: () => ({
    type: HIDE_TERMINAL,
  }),
};
