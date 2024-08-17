import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import background from './assets/back.png'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('${background}')` }}>
            <App />
        </div>
    </React.StrictMode>
);
