import React from "react"
import Header from "./src/header"
import Main from "./src/main"

export default function App(){
    const [memesData, setmemesData] = React.useState({})

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data => setmemesData(data.data.memes))
    },[])

    return (
        <div className="main-container">
            <Header />
            <Main dataValue={memesData}/>
        </div>
    )
}