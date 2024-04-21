import React, { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleTitleClick = () => {
        let words = text.split(" ");
        let newText = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
    }
    const handleInverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    }
    const handleDownloadClick = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'textfile.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
    }
    const handleClrClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onChangeHandler = (event) => {
        console.log("onChangeHandler  is running");
        setText(event.target.value)
    }


    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8"></textarea>
                </div>
                <button className="button btn btn-primary mx-1" onClick={handleUpClick} >{props.up}</button>
                <button className="button btn btn-primary mx-1" onClick={handleLoClick} >{props.lo}</button>
                <button className="button btn btn-primary mx-1" onClick={handleTitleClick} >{props.titleCase}</button>
                <button className="button btn btn-primary mx-1" onClick={handleInverseClick} >{props.inverse}</button>
                <button className="button btn btn-primary mx-1" onClick={handleDownloadClick} >{props.dwd}</button>
                <button className="button btn btn-primary mx-1" onClick={handleExtraSpacesClick} >{props.extraSpc}</button>
                <button className="button btn btn-primary mx-1" onClick={handleClrClick} >{props.clr}</button>
            </div>

            <div className='container my-3'>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p> time taken to read all text {0.008 * text.split(" ").length} Minutes </p>
                <h3>Privew</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
//comment
TextForms.defaultProps = {
    up: "UPPER CASE",
    lo: "lower case",
    titleCase: "Title Case",
    inverse: "iNvErSe cAsE",
    dwd: "Download Txt",
    clr: "clear",
    extraSpc:"Extra Space"

}