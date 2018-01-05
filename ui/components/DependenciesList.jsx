import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const DependenciesList = ({ dependencies }) =>
  dependencies.map(({ name, version }) => (
    <ListItem
      title={name}
      subtitle={version}
      buttons={<button>remove</button>}
      key={name}
    />
  ));

DependenciesList.propTypes = {
  dependencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
    }),
  ),
};

export default DependenciesList;
