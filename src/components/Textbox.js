import React, {useState} from 'react'


export default function Textbox(props) {
 
const [text, setText] = useState('Enter text here');
setText("Type anything thing to update");
 
  return (
    <div>
      <h1> {props.heading}- {text} </h1>
      <div className="mb-3">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="8">{text}</textarea>
      <button type="button" className="btn btn-primary btn-sm my-3">{props.submit}</button>
      </div>
   </div>
  )
};
