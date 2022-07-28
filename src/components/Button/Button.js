import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({loadMore}) => {
    return (
        <button className={s.Button} type="button" onClick={loadMore}>
            Load More
        </button>
    )
}

Button.prototype = {
    loadMore : PropTypes.func.isRequired,
  };
  
  export default Button;