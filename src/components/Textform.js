import React, {useState} from "react";


export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLoClick = () => {
    console.log("Lowercase button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleCpClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
    props.showAlert("Text copied to clipboard", "success");
  }
  const handleClClick = () => {
    console.log("Clear button was clicked");
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  }
 
  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      
      <h1>{props.heading}</h1>
      <div className="form-group mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={(event) => setText(event.target.value)}
          
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1"  onClick={handleUpClick} >Convert to Uppercase </button>
      <button className="btn btn-primary mx-2 my-1"  onClick={handleLoClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-2 my-1"  onClick={handleCpClick}>Copy text </button>
      <button className="btn btn-primary mx-2 my-1"  onClick={handleClClick}>Clear text </button>



    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  minutes read</p>
      <h2>preview</h2>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p> 
    </div>
    </>
  );
}
