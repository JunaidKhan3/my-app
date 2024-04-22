import React, { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lower Case", "success");
    }
    const handleTitleClick = () => {
        let words = text.split(" ");
        let newText = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
        props.showAlert("Converted into Title", "success");
    }
    const handleInverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Converted into Inverse Case", "success");
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
        props.showAlert("Downloaded", "success");
    }
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
        props.showAlert("ExtraSpaces done", "success");
    }
    const handleClrClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared", "success");
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
    }
    const onChangeHandler = (event) => {
        console.log("onChangeHandler  is running");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'light' : 'white' }}>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeHandler} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className="button btn btn-primary mx-1" onClick={handleUpClick} >{props.up}</button>
                <button className="button btn btn-primary mx-1" onClick={handleLoClick} >{props.lo}</button>
                <button className="button btn btn-primary mx-1" onClick={handleTitleClick} >{props.titleCase}</button>
                <button className="button btn btn-primary mx-1" onClick={handleInverseClick} >{props.inverse}</button>
                <button className="button btn btn-primary mx-1" onClick={handleDownloadClick} >{props.dwd}</button>
                <button className="button btn btn-primary mx-1" onClick={handleExtraSpacesClick} >{props.extraSpc}</button>
                <button className="button btn btn-primary mx-1" onClick={handleClrClick} >{props.clr}</button>
            </div>

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>{text.length === 0 ? 0 : `${text.trim().split(/\s+/).length}`} words {text.length} characters</p>
                <p> {text.length === 0 ? null : ` time taken to read all text ${0.008 * text.split(" ").length} Minutes`}   </p>
                <h3>Privew</h3>
                <p>{text.length > 0 ? text : 'enter a text in a box to preview here'}</p>
            </div>
        </>
    )
}
TextForms.defaultProps = {
    up: "UPPER CASE",
    lo: "lower case",
    titleCase: "Title Case",
    inverse: "iNvErSe cAsE",
    dwd: "Download Txt",
    clr: "clear",
    extraSpc: "Extra Space"

}