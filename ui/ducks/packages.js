const initialState = {
  selectedPackage: '',
  root: '',
  monorepo: [],
};

export const SET_PACKAGES = 'SET_PACKAGES';
export const SET_SELECTED_PACKAGE = 'SET_SELECTED_PACKAGE';

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_SELECTED_PACKAGE:
      return {
        ...state,
        selectedPackage: payload.name,
      };
    case SET_PACKAGES:
      return {
        ...state,
        selectedPackage: payload.root.name,
        root: payload.root.name,
        monorepo: payload.monorepo.map(pkg => pkg.name),
      };
    default:
      return state;
  }
};

export const actions = {
  setPackages: ({ root, monorepo }) => ({ type: SET_PACKAGES, root, monorepo }),
  setSelectedPackage: name => ({ type: SET_SELECTED_PACKAGE, name }),
};

export const selectors = {
  getSelectedPackageName: ({ selectedPackage }) => selectedPackage,
  getPackageNames: ({ monorepo, root }) => [root, ...monorepo],
};
