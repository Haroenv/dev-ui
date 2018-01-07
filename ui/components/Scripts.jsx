import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Cell } from 'styled-css-grid';

import { selectors, actions } from '../ducks/scripts';
import { selectors as packageSelectors } from '../ducks/packages';

import ScriptList from './ScriptList';

const Scripts = ({ scripts, onScriptClick }) => (
  <Grid columns={2}>
    <Cell>
      <ScriptList scripts={scripts} onScriptClick={onScriptClick} />
    </Cell>
    <Cell>
      <h1>Placeholder</h1>
    </Cell>
  </Grid>
);

Scripts.propTypes = {
  scripts: PropTypes.array.isRequired,
  onScriptClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    scripts: selectors.getScripts(
      state.scripts,
      packageSelectors.getSelectedPackageName(state.packages),
    ),
  }),
  dispatch =>
    bindActionCreators(
      {
        onScriptClick: actions.runScript,
      },
      dispatch,
    ),
)(Scripts);
