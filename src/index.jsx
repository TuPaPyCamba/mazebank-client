import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { MazeContextProvider } from "./context/Context.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <MazeContextProvider>
            <App />
    </MazeContextProvider>
)
