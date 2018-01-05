const initialState = {
  packages: {},
};

export const FETCH_DEPENDENCIES = 'FETCH_DEPENDENCIES';
export const SET_DEPENDENCIES = 'SET_DEPENDENCIES';

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_DEPENDENCIES:
      return {
        ...state,
        packages: payload.packages.reduce(
          (packages, pkg) => ({
            ...packages,
            [pkg.name]: {
              dependencies: arrayify(pkg.dependencies, 'version'),
              devDependencies: arrayify(pkg.devDependencies, 'version'),
            },
          }),
          {},
        ),
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
  fetchDependencies: () => ({ type: FETCH_DEPENDENCIES }),
  setDependencies: packages => ({ type: SET_DEPENDENCIES, packages }),
};

export const selectors = {
  getDependencies: ({ packages }, packageName) =>
    packages[packageName] ? packages[packageName].dependencies : [],
  getDevDependencies: ({ packages }, packageName) =>
    packages[packageName] ? packages[packageName].devDependencies : [],
};
