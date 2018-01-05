const initialState = {
  selectedPackage: '',
  root: {
    dependencies: [],
    devDependencies: [],
    name: '',
  },
  monorepo: [],
};

export const FETCH_DEPENDENCIES = 'FETCH_DEPENDENCIES';
export const SET_DEPENDENCIES = 'SET_DEPENDENCIES';
export const SET_SELECTED_PACKAGE = 'SET_SELECTED_PACKAGE';

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_SELECTED_PACKAGE:
      return {
        ...state,
        selectedPackage: payload.name,
      };
    case SET_DEPENDENCIES:
      return {
        ...state,
        selectedPackage: payload.root.name,
        root: {
          name: payload.root.name,
          dependencies: arrayify(payload.root.dependencies, 'version'),
          devDependencies: arrayify(payload.root.devDependencies, 'version'),
        },
        monorepo: payload.monorepo.map(pkg => ({
          name: pkg.name,
          dependencies: arrayify(pkg.dependencies, 'version'),
          devDependencies: arrayify(pkg.devDependencies, 'version'),
        })),
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
  setDependencies: ({ root, monorepo }) => ({
    type: SET_DEPENDENCIES,
    root,
    monorepo,
  }),
  setSelectedPackage: name => ({ type: SET_SELECTED_PACKAGE, name }),
};

export const selectors = {
  getSelectedPackageName: ({ selectedPackage }) => selectedPackage,
  getPackageNames: ({ monorepo, root }) => [
    root.name,
    ...monorepo.map(({ name }) => name),
  ],
  getDependencies: ({ monorepo, root }, packageName) =>
    root.name === packageName
      ? root.dependencies
      : monorepo.find(({ name }) => name === packageName).dependencies,
  getDevDependencies: ({ monorepo, root }, packageName) =>
    root.name === packageName
      ? root.devDependencies
      : monorepo.find(({ name }) => name === packageName).devDependencies,
};
