import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './List';

const DependenciesList = ({ dependencies, onDependencyClick = () => {} }) => (
  <List>
    {dependencies.map(({ name, version }) => (
      <ListItem
        title={name}
        subtitle={version}
        buttons={
          <button onClick={() => onDependencyClick(name)}>remove</button>
        }
        key={name}
      />
    ))}
  </List>
);

DependenciesList.propTypes = {
  dependencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
    }),
  ),
  onDependencyClick: PropTypes.func,
};

export default DependenciesList;
