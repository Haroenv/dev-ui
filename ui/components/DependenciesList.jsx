import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5px;
  & h2,
  & code {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const DependenciesList = ({ dependencies }) =>
  dependencies.map(({ name, version }) => (
    <Section key={name}>
      <h2>{name}</h2>
      <code>{version}</code>
    </Section>
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
