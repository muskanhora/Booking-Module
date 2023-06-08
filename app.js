import React from "react";
import ReactDOM  from "react-dom/client";
import Form from "./src/Components/Form";

const AppLayout=()=>{
    return(
        <div className="flex justify-center align-middle content-center">
             <Form/>
        </div>

    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);