import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import Dependencies from './Dependencies';
import { actions, selectors } from '../ducks/dependencies';

const PackageSelect = styled(Select)`
  width: 300px;
`;

const Packages = ({
  className,
  selectedPackageName,
  packageNames,
  onSelectPackage,
}) => (
  <div>
    <PackageSelect
      className={className}
      clearable={false}
      value={selectedPackageName}
      onChange={selectedOption => onSelectPackage(selectedOption.value)}
      options={packageNames.map(name => ({
        value: name,
        label: name || '<anonymous>',
      }))}
    />
    <Dependencies packageName={selectedPackageName} />
  </div>
);

Packages.propTypes = {
  className: PropTypes.string,
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
