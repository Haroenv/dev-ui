import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';
import { bindActionCreators } from 'redux';
import { selectors, actions } from '../ducks/dependencies';
import { selectors as packageSelectors } from '../ducks/packages';
import DependenciesList from './DependenciesList';
import Search from './Search';

const Dependencies = ({
  dependencies = [],
  devDependencies = [],
  onRemoveClick,
  onAddClick,
}) => (
  <Grid columns={2}>
    <Cell>
      <h1>Dependencies</h1>
      <DependenciesList
        dependencies={dependencies}
        onRemoveClick={onRemoveClick}
      />
      <h1>DevDependencies</h1>
      <DependenciesList
        dependencies={devDependencies}
        onRemoveClick={onRemoveClick}
      />
    </Cell>
    <Cell>
      <Search onAddClick={onAddClick} />
    </Cell>
  </Grid>
);

Dependencies.propTypes = {
  dependencies: PropTypes.array.isRequired,
  devDependencies: PropTypes.array.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    dependencies: selectors.getDependencies(
      state.dependencies,
      packageSelectors.getSelectedPackageName(state.packages),
    ),
    devDependencies: selectors.getDevDependencies(
      state.dependencies,
      packageSelectors.getSelectedPackageName(state.packages),
    ),
  }),
  dispatch =>
    bindActionCreators(
      {
        onAddClick: actions.addDependency,
        onRemoveClick: actions.removeDependency,
      },
      dispatch,
    ),
)(Dependencies);
