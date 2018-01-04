const initialState = {
  packageDependencies: {
    dependencies: {},
    devDependencies: {},
  },
};

export const FETCH_DEPENDENCIES = 'FETCH_DEPENDENCIES';
export const SET_DEPENDENCIES = 'SET_DEPENDENCIES';

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_DEPENDENCIES:
      return {
        ...state,
        packageDependencies: {
          devDependencies: payload.devDependencies,
          dependencies: payload.dependencies,
        },
      };
    default:
      return state;
  }
};

export const actions = {
  fetchDependencies: () => ({ type: FETCH_DEPENDENCIES }),
  setDependencies: ({ dependencies, devDependencies }) => ({
    type: SET_DEPENDENCIES,
    dependencies,
    devDependencies,
  }),
};

export const selectors = {
  getDependencies: ({ packageDependencies: { dependencies } }) =>
    Object.keys(dependencies).map(name => ({
      name,
      version: dependencies[name],
    })),
  getDevDependencies: ({ packageDependencies: { devDependencies } }) =>
    Object.keys(devDependencies).map(name => ({
      name,
      version: devDependencies[name],
    })),
};
