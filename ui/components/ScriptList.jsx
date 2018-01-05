import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from './ListItem';
const Container = styled.div``;

const ScriptList = ({ scripts = [], onScriptClick = () => {} }) => (
  <Container>
    {scripts.map(({ name, command }) => (
      <ListItem
        title={name}
        subtitle={command}
        key={name}
        buttons={<button onClick={() => onScriptClick(name)}>run</button>}
      />
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
  onScriptClick: PropTypes.func,
};

export default ScriptList;
