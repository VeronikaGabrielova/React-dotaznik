import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({type, text,onSelected}) => {

  return (
    <div onClick = {()=>{onSelected(type)}} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;