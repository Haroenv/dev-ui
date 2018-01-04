import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from './Section';

const Container = styled.div``;

const Heading = styled.div`
  font-size: 1.5em;
`;

const Command = styled.div`
  padding-left: 1em;
  font-family: monospace;
`;

const ScriptList = ({ scripts }) => (
  <Container>
    {scripts.map(({ name, command }) => (
      <Section key={name}>
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
};

export default ScriptList;
