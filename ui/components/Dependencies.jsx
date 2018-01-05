import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { selectors } from '../ducks/dependencies';
import DependenciesList from './DependenciesList';
import Search from './Search';

const Dependencies = ({ dependencies, devDependencies }) => (
  <Grid columns={2}>
    <Cell>
      <h1>Dependencies</h1>
      <DependenciesList dependencies={dependencies} />
      <h1>DevDependencies</h1>
      <DependenciesList dependencies={devDependencies} />
    </Cell>
    <Cell>
      <Search />
    </Cell>
  </Grid>
);

Dependencies.propTypes = {
  dependencies: PropTypes.array.isRequired,
  devDependencies: PropTypes.array.isRequired,
  packageName: PropTypes.string.isRequired,
};

export default connect((state, ownProps) => ({
  dependencies: selectors.getDependencies(
    state.dependencies,
    ownProps.packageName,
  ),
  devDependencies: selectors.getDevDependencies(
    state.dependencies,
    ownProps.packageName,
  ),
}))(Dependencies);
