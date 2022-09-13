import React from "react"
import Editor from "./editor"

function App() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-slate-900">
            <div className="w-[60%] h-[90%] bg-slate-700 rounded-lg overflow-hidden shadow-lg shadow-white/10">
                <Editor />
            </div>
        </div>
    );
}

export default App;
