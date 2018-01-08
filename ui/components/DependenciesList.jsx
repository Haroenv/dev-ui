import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './List';

const DependenciesList = ({ dependencies, onRemoveClick = () => {} }) => (
  <List>
    {dependencies.map(({ name, version }) => (
      <ListItem
        title={name}
        subtitle={version}
        buttons={<button onClick={() => onRemoveClick(name)}>remove</button>}
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
  onRemoveClick: PropTypes.func,
};

export default DependenciesList;
