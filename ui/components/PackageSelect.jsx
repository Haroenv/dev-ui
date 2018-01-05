import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import { actions, selectors } from '../ducks/packages';

const StyledSelect = styled(Select)`
  width: 300px;
`;

const PackageSelect = ({
  className,
  selectedPackageName,
  packageNames,
  onSelectPackage,
}) => (
  <StyledSelect
    className={className}
    clearable={false}
    value={selectedPackageName}
    onChange={selectedOption => onSelectPackage(selectedOption.value)}
    options={packageNames.map(name => ({
      value: name,
      label: name || '<anonymous>',
    }))}
  />
);

PackageSelect.propTypes = {
  className: PropTypes.string,
  packageNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPackageName: PropTypes.string.isRequired,
  onSelectPackage: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    selectedPackageName: selectors.getSelectedPackageName(state.packages),
    packageNames: selectors.getPackageNames(state.packages),
  }),
  dispatch =>
    bindActionCreators(
      {
        onSelectPackage: actions.setSelectedPackage,
      },
      dispatch,
    ),
)(PackageSelect);
