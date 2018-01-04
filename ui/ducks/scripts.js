const initialState = {
  packageScripts: {},
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
        packageScripts: payload.scripts,
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
  setScripts: scripts => ({ type: SET_SCRIPTS, scripts }),
  runScript: name => ({ type: RUN_SCRIPT, name }),
  scriptLogAppend: text => ({ type: SCRIPT_LOG_APPEND, text }),
};

export const selectors = {
  getScripts: state =>
    Object.keys(state.packageScripts).map(name => ({
      name,
      command: state.packageScripts[name],
    })),
  getLog: state => state.runningScriptLog,
};
