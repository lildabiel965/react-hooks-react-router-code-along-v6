import React from "react";
import ReactDOM from "react-dom/client";
import{ createBrowserRouter, Routerprovider} from "react-router-dom";
import routes from "./routes.js";
import "./index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routerprovider routes={routes} />);