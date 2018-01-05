const initialState = {
  packages: {},
};

export const SET_DEPENDENCIES = 'SET_DEPENDENCIES';
export const REMOVE_DEP = 'REMOVE_DEP';
export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_DEPENDENCIES:
      return {
        ...state,
        packages: {
          ...state.packages,
          [payload.name]: {
            dependencies: arrayify(payload.dependencies, 'version'),
            devDependencies: arrayify(payload.devDependencies, 'version'),
          },
        },
      };
    case REMOVE_DEP:
      return {
        ...state,
        removingDependency: payload.name,
      };
    default:
      return state;
  }
};

function arrayify(object = {}, key) {
  return Object.keys(object).map(name => ({
    name,
    [key]: object[name],
  }));
}

export const actions = {
  setDependencies: ({ name, dependencies, devDependencies }) => ({
    type: SET_DEPENDENCIES,
    name,
    dependencies,
    devDependencies,
  }),
  removeDependency: name => ({
    type: REMOVE_DEP,
    name,
  }),
};

export const selectors = {
  getDependencies: ({ packages }, packageName) =>
    packages[packageName] ? packages[packageName].dependencies : [],
  getDevDependencies: ({ packages }, packageName) =>
    packages[packageName] ? packages[packageName].devDependencies : [],
};
