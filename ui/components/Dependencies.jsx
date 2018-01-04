import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectors } from '../ducks/dependencies';
import DependenciesList from './DependenciesList';
import Search from './Search';

const Dependencies = ({ dependencies, devDependencies }) => (
  <article>
    <h1>Dependencies</h1>
    <DependenciesList dependencies={dependencies} />
    <h1>DevDependencies</h1>
    <DependenciesList dependencies={devDependencies} />
    <Search />
  </article>
);

Dependencies.propTypes = {
  dependencies: PropTypes.array.isRequired,
  devDependencies: PropTypes.array.isRequired,
};

export default connect(state => ({
  dependencies: selectors.getDependencies(state.dependencies),
  devDependencies: selectors.getDevDependencies(state.dependencies),
}))(Dependencies);
