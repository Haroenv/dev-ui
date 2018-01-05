import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './List';

const ScriptList = ({ scripts = [], onScriptClick = () => {} }) => (
  <List>
    {scripts.map(({ name, command }) => (
      <ListItem
        title={name}
        subtitle={command}
        key={name}
        buttons={<button onClick={() => onScriptClick(name)}>run</button>}
      />
    ))}
  </List>
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
