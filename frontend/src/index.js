import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import {Provider} from "react-redux"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {transitions, positions, Provider as AlertProvider} from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import store from "./store";
// require('dotenv').config();

// Axios configuration
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";

axios.defaults.withCredentials = true;

// const options = {
//   position: positions.BOTTOM_CENTER,
//   timeout: 4000,
//   offset: "30px",
//   transition: transitions.SCALE,
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <AlertProvider template={AlertTemplate} {...options}> */}
    {/* <React.StrictMode> */}
      <App />
      <ToastContainer
      position="bottom-center"
      autoClose={4000}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      theme="light"
    />
    {/* </React.StrictMode> */}
    {/* </AlertProvider> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
