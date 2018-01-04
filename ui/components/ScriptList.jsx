import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1em;
`;

const ScriptList = ({ scripts }) => (
  <div>
    {scripts.map(({ name, command }) => (
      <div key={name}>
        <h2>{name}</h2>
        <p>{command}</p>
      </div>
    ))}
  </div>
);

ScriptList.propTypes = {
  scripts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      command: PropTypes.string.isRequired,
    }),
  ),
};

export default ScriptList;
