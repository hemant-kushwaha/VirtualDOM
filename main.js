import React from "react";
import ReactDOM from "react-dom/client"
import Add from "./src/components/app";

function App () {

    const arr = [0,1,2,3,4]

    return(
        <>
        {/* Key is bounded to the state_varible 
            VDom is light weight copy of real DOM
            */}
        {arr.map((value)=><Add key={value}></Add>)}
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)