import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Cell } from 'styled-css-grid';

import { selectors, actions } from '../ducks/scripts';
import { selectors as packageSelectors } from '../ducks/packages';

import ScriptList from './ScriptList';
import { Wrapper, Log } from './styled';

const Scripts = ({ scripts, log, onScriptClick }) => (
  <Grid columns={2}>
    <Cell>
      <ScriptList scripts={scripts} onScriptClick={onScriptClick} />
    </Cell>
    <Cell>
      <Wrapper>
        <h3>Terminal output:</h3>
        <Log dangerouslySetInnerHTML={{ __html: log }} />
      </Wrapper>
    </Cell>
  </Grid>
);

Scripts.propTypes = {
  scripts: PropTypes.array.isRequired,
  log: PropTypes.string.isRequired,
  onScriptClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    scripts: selectors.getScripts(
      state.scripts,
      packageSelectors.getSelectedPackageName(state.packages),
    ),
    log: selectors.getLog(state.scripts),
  }),
  dispatch =>
    bindActionCreators(
      {
        onScriptClick: actions.runScript,
      },
      dispatch,
    ),
)(Scripts);
