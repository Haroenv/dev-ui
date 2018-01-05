const initialState = {
  packages: {},
  runningScriptName: null,
  runningScriptLog: '',
};

export const FETCH_SCRIPTS = 'FETCH_SCRIPTS';
export const SET_SCRIPTS = 'SET_SCRIPTS';
export const RUN_SCRIPT = 'RUN_SCRIPT';
export const SCRIPT_LOG_APPEND = 'SCRIPT_LOG_APPEND';

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_SCRIPTS:
      return {
        ...state,
        packages: {
          [payload.packageName]: payload.scripts,
        },
      };
    case RUN_SCRIPT:
      return {
        ...state,
        runningScriptName: payload.name,
        runningScriptLog: '',
      };
    case SCRIPT_LOG_APPEND:
      return {
        ...state,
        runningScriptLog: state.runningScriptLog + payload.text,
      };
    default:
      return state;
  }
};

export const actions = {
  fetchScripts: () => ({ type: FETCH_SCRIPTS }),
  setScripts: (scripts, packageName) => ({
    type: SET_SCRIPTS,
    packageName,
    scripts,
  }),
  runScript: name => ({ type: RUN_SCRIPT, name }),
  scriptLogAppend: text => ({ type: SCRIPT_LOG_APPEND, text }),
};

export const selectors = {
  getScripts: (state, packageName) =>
    state.packages[packageName]
      ? Object.keys(state.packages[packageName]).map(scriptName => ({
          name: scriptName,
          command: state.packages[packageName][scriptName],
        }))
      : [],
  getLog: state => state.runningScriptLog,
};
