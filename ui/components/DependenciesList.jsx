import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './List';

const DependenciesList = ({ dependencies }) => (
  <List>
    {dependencies.map(({ name, version }) => (
      <ListItem
        title={name}
        subtitle={version}
        buttons={<button>remove</button>}
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
};

export default DependenciesList;
