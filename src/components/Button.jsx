import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, className, onItemClick }) {
  return (
    <button onClick={onItemClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClickItem: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default Button;
