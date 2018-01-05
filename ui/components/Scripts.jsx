import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Cell } from 'styled-css-grid';

import { selectors, actions } from '../ducks/scripts';
import ScriptList from './ScriptList';

const Scripts = ({ scripts }) => (
  <Grid columns={2}>
    <Cell>
      <ScriptList scripts={scripts} />
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
