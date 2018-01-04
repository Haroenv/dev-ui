const initialState = {
  packageScripts: {},
};

export const types = {
  FETCH_SCRIPTS: 'FETCH_SCRIPTS',
  SET_SCRIPTS: 'SET_SCRIPTS',
};

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case types.SET_SCRIPTS:
      return {
        ...state,
        packageScripts: payload.scripts,
      };
    default:
      return state;
  }
};

export const actions = {
  fetchScripts: () => ({ type: types.FETCH_SCRIPTS }),
  setScripts: scripts => ({ type: types.SET_SCRIPTS, scripts }),
};

export const selectors = {
  getScripts: state =>
    Object.keys(state.packageScripts).map(name => ({
      name,
      command: state.packageScripts[name],
    })),
};
