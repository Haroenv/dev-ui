import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1em;
`;

const DependenciesList = ({ dependencies }) =>
  dependencies.map(({ name, version }) => (
    <div key={name}>
      <h2>{name}</h2>
      <code>{version}</code>
    </div>
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
