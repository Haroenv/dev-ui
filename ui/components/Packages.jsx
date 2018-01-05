import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dependencies from './Dependencies';
import { actions, selectors } from '../ducks/dependencies';

const Packages = ({ selectedPackageName, packageNames, onSelectPackage }) => (
  <div>
    <select
      value={selectedPackageName}
      onChange={event => onSelectPackage(event.target.value)}
    >
      {packageNames.map(packageName => (
        <option key={packageName} value={packageName}>
          {packageName || '<anonymous>'}
        </option>
      ))}
    </select>
    <Dependencies packageName={selectedPackageName} />
  </div>
);

Packages.propTypes = {
  packageNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPackageName: PropTypes.string.isRequired,
  onSelectPackage: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    selectedPackageName: selectors.getSelectedPackageName(state.dependencies),
    packageNames: selectors.getPackageNames(state.dependencies),
  }),
  dispatch =>
    bindActionCreators(
      {
        onSelectPackage: actions.setSelectedPackage,
      },
      dispatch,
    ),
)(Packages);
