import React, { useState } from "react";

export default function TextForm(props) {
    
  const handleUpChange = () => {
    console.log("You have clicked on handleUpClick");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
    if(text.length === 0){
      props.showAlert("There is no text to convert","warning");
    }
  };

  const handleLowChange = () => {
    console.log("You have clicked on handleUpClick");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
    if(text.length === 0){
      props.showAlert("There is no text to convert","warning");
    }
  };

  const handleClearChange = () => {
    console.log("You have clicked on handleClearClick");
    const newText = "";
    setText(newText);
    
  };
  
  const handleCopy = ()=>{
    console.log("You clicked on Copy button");
    var copiedText = document.getElementById('myBox');
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    setCopyBtnText("Copied to clipboard");
    // Reset the button text after 2 seconds
  setTimeout(() => {
    setCopyBtnText("Copy");
  }, 800);

  }

  const handleExtraSpaces = ()=>{
    console.log("You clicked on Clear Extra Spaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed !","success");
    if(text.length === 0){
      props.showAlert("There is no text to convert","warning");
    }
  }

  const handleSentenceCase = () => {
    console.log("You clicked on Capitalize Sentence Case");
    // Split the text into sentences based on full stops
    let sentences = text.split('. ');
    let newText = sentences.map(sentence => {
      // Trim to remove extra spaces and capitalize the first letter of each sentence
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }).join('. ');
    setText(newText);
    props.showAlert("Capitalised the first letter of every sentence","success");
    if(text.length === 0){
      props.showAlert("There is no text to convert","warning");
    }
  };
  

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };


  const [text, setText] = useState("");
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const characters = text.length;

  let words = text.split(" ").length;
  if(characters === 0 || text.charAt(text.length-1)===" "){
    words = words-1;
  }
  return (
    <>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <textarea style={{backgroundColor: props.mode==='dark'?'#495057':'white', color: props.mode==='dark'?'white':'black'}}
        className="form-control my-2"
        id="myBox"
        rows="8"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <button className="btn btn-success mx-2 my-2" onClick={handleUpChange}>
        Convert to Uppercase
      </button>
      <button className="btn btn-success mx-2 my-2" onClick={handleLowChange}>
        Convert to Lowercase
      </button>
      <button className="btn btn-success mx-2 my-2" onClick={handleClearChange}>
        Clear Text
      </button>
      <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>
        {copyBtnText}
      </button>
      <button className="btn btn-success mx-2 my-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-success mx-2 my-2" onClick={handleSentenceCase}>
        Capitalise Sentences
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Sumamry</h2>
      
      <p>{words} words and {characters} characters</p>
      <p>{words/125} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here."}</p>
    </div>

    </>
  );
}
