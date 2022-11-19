import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
     setText(newText);
     props.showAlert("Changed To Upper Case","success");
    }
    const handleClearClick=()=>{
     setText("");
     props.showAlert("Text Cleared","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
     setText(newText);
     props.showAlert("Changed To Lower Case","success");
    }
    const handleOnChange=(event)=>{
     setText(event.target.value)
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied","success");
     }
     const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Deleted","success");
     }
    const [text, setText] = useState('Enter Text Here');
  return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#010b2f'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea value={text} className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#010b2f'}} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1"  onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1"  onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Space</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#010b2f'}}>
              <h2>Your Text Summary</h2>
              <b><p> {text.split(" ").length} Words and {text.length} Characters</p></b>
              <p> {0.008 * text.split(" ").length} Minutes to read </p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>

        </>
  )
}
