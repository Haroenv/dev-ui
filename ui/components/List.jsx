import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2);
`;

export class ListItem extends React.Component {
  render() {
    return (
      <ListItemContainer>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.subtitle}</p>
        </div>
        <div>{this.props.buttons}</div>
      </ListItemContainer>
    );
  }
}
ListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttons: PropTypes.element,
};

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
