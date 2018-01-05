import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectors } from '../ducks/dependencies';
import DependenciesList from './DependenciesList';
import Search from './Search';
import { Grid } from './styled';

const Dependencies = ({ dependencies, devDependencies }) => (
  <Grid col="2">
    <div>
      <h1>Dependencies</h1>
      <DependenciesList dependencies={dependencies} />
      <h1>DevDependencies</h1>
      <DependenciesList dependencies={devDependencies} />
    </div>
    <div>
      <Search />
    </div>
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
