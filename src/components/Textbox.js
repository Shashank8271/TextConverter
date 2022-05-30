import React, {useState} from 'react'


export default function Textbox(props) {
 
const [text, setText] = useState('Enter anything');

const handleUpClick = () =>{
  console.log("handle up click");
let newText = text.toUpperCase();
  setText(newText)
}
const handleOnchange=(event)=>{
  console.log("onChnge");
  setText(event.target.value)
}

  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="exampleFormControlTextarea1" value= {text}  onChange= {handleOnchange} rows="8"></textarea>
      <button type="button" className="btn btn-primary btn-sm my-3" onClick={handleUpClick}>{props.submit}</button>
      </div>
   </div>
  )
};
