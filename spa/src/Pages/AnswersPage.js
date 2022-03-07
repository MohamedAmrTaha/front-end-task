import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LastPage from "./LastPage";


function AnswersPage(props)
{
    
    const {state:{sectionOneAnswers,sectionTwoAnswers}}  = useLocation();
    console.log({sectionOneAnswers,sectionTwoAnswers});
    const navigate = useNavigate();
    function handleClick()
    {
        navigate("/LastPage")
    }
    return (
    <div>
    <h1>Section 1</h1>
    <p>1.Is your business model B2C or B2B or both?</p>
    <p>Answer: {sectionOneAnswers.answerOne}</p>
    <p>2.Do you target all age brackets?</p>
    <p>Answer: {sectionOneAnswers.answerTwo}</p>
    <p>3.Do you target all industries?</p>
    <p>Answer: {sectionOneAnswers.answerThree}</p>
    <h1>Section 2</h1>
    <p>1. Did you have an investment?</p>
    <p>Answer: {sectionTwoAnswers.answerOne}</p>
    <p>2.how much was the investment?</p>
    <p>Answer: {sectionTwoAnswers.answerTwo}</p>
    <button onClick={handleClick}>submit</button>
    </div>



    );


};
export default AnswersPage;