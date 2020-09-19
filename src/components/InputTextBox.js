import React from 'react';
import PropTypes from 'prop-types';



export const InputTextBox = (props) => {
//   return <input type="text" value={props.text} onChange={(evt)=>{props.onInputChange(evt)}}></input>;//Normal Arrow function
//   return <input type='text' value= {props.text} onChange={(evt)=>{props.onInputChange}}></input>//Short hand Arrow function
return <input type='text' value= {props.text} onChange={props.onInputChange}></input>//Shorter version
};

InputTextBox.propTypes = {
    text:PropTypes.string.isRequired,
    onInputChange:PropTypes.func.isRequired
}
