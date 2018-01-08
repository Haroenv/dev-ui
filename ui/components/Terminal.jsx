import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../ducks/ui';
import { selectors } from '../ducks/scripts';
import './terminal.css';
const TerminalContainer = styled.pre`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80vh;
  width: 100vw;
  background: white;
  padding: 20px;
  margin: 0;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
  transform: ${props => (props.show ? 'none' : 'translateY(100vh)')};
  overflow-y: auto;
  transition: 300ms;
`;
const TerminalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: 300ms;
`;
const Terminal = ({ text, show, onBackdropClick }) => (
  <React.Fragment>
    <TerminalBackdrop onClick={onBackdropClick} show={show} />
    <TerminalContainer show={show} dangerouslySetInnerHTML={{ __html: text }} />
  </React.Fragment>
);
Terminal.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
  onBackdropClick: PropTypes.func,
};
export default connect(
  state => ({
    show: state.ui.terminal,
    text: selectors.getLog(state.scripts),
  }),
  dispatch =>
    bindActionCreators(
      {
        onBackdropClick: actions.hideTerminal,
      },
      dispatch,
    ),
)(Terminal);
