import React from 'react';

//same as function(){}
const person = (props) =>{
    return(
<div>
    <p><strong>Name:</strong>{props.name}</p>
    <p><strong>Age:</strong>{props.age}</p>
    <p>{props.children}</p></div>
    ) 
}

export default person;