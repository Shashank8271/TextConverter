import React from 'react'


export default function Textbox(props) {
 
// const [text, setText] = useState(0);

  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
      <button type="button" className="btn btn-primary btn-sm my-3">{props.submit}</button>
      </div>
   </div>
  )
};
