import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { selectors, actions } from '../ducks/dependencies';
import { actions as uiActions } from '../ducks/ui';
import { selectors as packageSelectors } from '../ducks/packages';
import DependenciesList from './DependenciesList';
import Search from './Search';

const Dependencies = ({
  dependencies = [],
  devDependencies = [],
  onDependencyClick,
  onAddClick,
}) => (
  <Grid columns={2}>
    <Cell>
      <h1>Dependencies</h1>
      <DependenciesList
        dependencies={dependencies}
        onDependencyClick={onDependencyClick}
      />
      <h1>DevDependencies</h1>
      <DependenciesList
        dependencies={devDependencies}
        onDependencyClick={onDependencyClick}
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
  onDependencyClick: PropTypes.func.isRequired,
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
  dispatch => ({
    onAddClick: name => {
      dispatch(uiActions.showTerminal());
      dispatch(actions.addDependency(name));
    },
    onDependencyClick: name => {
      dispatch(uiActions.showTerminal());
      dispatch(actions.removeDependency(name));
    },
  }),
)(Dependencies);
