import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {selectors} from '../ducks/scripts';
import ScriptList from './ScriptList';

const Scripts = ({scripts}) => <ScriptList scripts={scripts} />;

Scripts.propTypes = {
  scripts: PropTypes.array.isRequired,
};

export default connect(state => ({
  scripts: selectors.getScripts(state.scripts),
}))(Scripts);
