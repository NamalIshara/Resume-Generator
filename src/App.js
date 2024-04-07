import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Form from "./Pages/Form"



import "./App.css";

function App() {
  return (
    <div>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
      </Routes> 
    </BrowserRouter>
    </div>

  );
}

export default App;
