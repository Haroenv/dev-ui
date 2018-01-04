const initialState = {
  packageScripts: {},
};

export const FETCH_SCRIPTS = 'FETCH_SCRIPTS';
export const SET_SCRIPTS = 'SET_SCRIPTS';

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_SCRIPTS:
      return {
        ...state,
        packageScripts: payload.scripts,
      };
    default:
      return state;
  }
};

export const actions = {
  fetchScripts: () => ({ type: FETCH_SCRIPTS }),
  setScripts: scripts => ({ type: SET_SCRIPTS, scripts }),
};

export const selectors = {
  getScripts: state =>
    Object.keys(state.packageScripts).map(name => ({
      name,
      command: state.packageScripts[name],
    })),
};
