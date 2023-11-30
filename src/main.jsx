import React from "react";

export default function Main(props){

const [inputValue, setinputValue] = React.useState({
        firstName: "",
        lastName: "",
})
    
const [url, setUrl] = React.useState({
    url: ""
})

function toggleInput(e){
    e.preventDefault()
    setinputValue(prev => (
        {
            ...prev, 
            [e.target.name]: e.target.value
        }
    ))
}

function randomValue(){
    const dataValue = props.dataValue
    const randomNumber = Math.floor(Math.random()*dataValue.length)
    return dataValue[randomNumber].url
}

function onClickEvent(){
    (inputValue.firstName && inputValue.lastName) ? setUrl({
        url: randomValue()
    }) : ""
}

    return (
        <main>
            <div className="form-section">
                <input 
                type="text"
                name="firstName"
                placeholder="Type your text"
                maxLength="41"
                onChange={toggleInput}
                value={inputValue.firstName} 
                />
                <input 
                type="text"
                name="lastName" 
                placeholder="Type your text" 
                maxLength="41"
                onChange={toggleInput}
                value={inputValue.lastName}  
                />
                <button type="submit" onClick={onClickEvent}>GET A NEW MEME IMAGE</button>
                <div className="meme-img-div">
                    {url.url && <img src={url.url}/>}
                    <h3 className="meme-img-text-1">{url.url && inputValue.firstName}</h3>
                    <h3 className="meme-img-text-2">{url.url && inputValue.lastName}</h3>
                </div>
            </div>
        </main>
    )
}