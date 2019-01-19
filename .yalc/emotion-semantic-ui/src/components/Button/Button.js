import React from 'react'
import PropTypes from 'prop-types'
import { css } from "emotion";
import styled from "react-emotion";

class Button extends React.Component {

  render() {
    const { className } = this.props

    return (
      <button className={ className }>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
}

Button.defaultProps = {
}

const StyledButton = styled(Button)`
  cursor: pointer;
  display: inline-block;

  min-height: 1em;

  outline: none;
  border: none;
  color: black;
`;

export default StyledButton;