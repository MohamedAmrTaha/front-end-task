import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage"
import Section_1 from "../Pages/Section1"
import Section_2 from "../Pages/Section2"
import AnswersPage from "../Pages/AnswersPage"
import LastPage from "../Pages/LastPage";

function App() {
    return (
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Section_1" element={<Section_1/>}/>
          <Route path="/Section_2" element={<Section_2/>}/>
          <Route path="/AnswersPage" element={<AnswersPage/>}/>
          <Route path="/LastPage" element={<LastPage/>}/>
          </Routes> 
        </BrowserRouter>
      )
      
}
export default App;