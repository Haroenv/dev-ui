import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectors } from '../ducks/scripts';
import ScriptList from './ScriptList';
import { Grid } from './styled';
const Scripts = ({ scripts }) => (
  <Grid col="2">
    <ScriptList scripts={scripts} />
    <div>
      <h3>Terminal output:</h3>
    </div>
  </Grid>
);

Scripts.propTypes = {
  scripts: PropTypes.array.isRequired,
};

export default connect(state => ({
  scripts: selectors.getScripts(state.scripts),
}))(Scripts);
