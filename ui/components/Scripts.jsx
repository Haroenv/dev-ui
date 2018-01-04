import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectors, actions } from '../ducks/scripts';
import ScriptList from './ScriptList';
import { Grid, Log } from './styled';

const Scripts = ({ scripts, log, onScriptClick }) => (
  <Grid col="2">
    <ScriptList scripts={scripts} onScriptClick={onScriptClick} />
    <div>
      <h3>Terminal output:</h3>
      <Log dangerouslySetInnerHTML={{ __html: log }} />
    </div>
  </Grid>
);

Scripts.propTypes = {
  scripts: PropTypes.array.isRequired,
  log: PropTypes.string.isRequired,
  onScriptClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    scripts: selectors.getScripts(state.scripts),
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
