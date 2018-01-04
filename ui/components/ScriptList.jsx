import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from './Section';

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 1.5em;
`;

const Command = styled.div`
  padding-left: 1em;
  font-family: monospace;
`;

const ScriptList = ({ scripts, onScriptClick }) => (
  <Container>
    {scripts.map(({ name, command }) => (
      <Section key={name} onClick={() => onScriptClick(name)}>
        <Heading>{name}</Heading>
        <Command>{command}</Command>
      </Section>
    ))}
  </Container>
);

ScriptList.propTypes = {
  scripts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      command: PropTypes.string.isRequired,
    }),
  ),
  onScriptClick: PropTypes.func.isRequired,
};

export default ScriptList;
