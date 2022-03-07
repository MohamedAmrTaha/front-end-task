import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Section_1(){
    const [qToShow, setQToShow] = useState(null);
    const [qOneAnswer, setQOneAnswer] = useState(null);
    const [qTwoAnswer, setQTwoAnswer] = useState(null);
    const [qThreeAnswer, setQThreeAnswer] = useState(null);
    const navigate = useNavigate();
    function handleClick(e)
    {
        let id = e.target.id;
        if(id ==="answer_one")
        {
            setQToShow(3);
            setQOneAnswer(1);
            
        }
        else if (id ==="answer_two")
        {
            setQToShow(2);
            setQOneAnswer(2);
        }
        else if (id ==="answer_three")
        {
            setQToShow(1);
            setQOneAnswer(3);
            
        }
    };

    function handleClickOfNext(){
        if (qOneAnswer===1 && qThreeAnswer)  
        {
            navigate("/Section_2",{state:{answerOne:"B2C",answerTwo:"-",answerThree:qThreeAnswer}});
        }
        else if(qOneAnswer===2 && qTwoAnswer)
        {
            navigate("/Section_2",{state:{answerOne:"B2B",answerTwo:qTwoAnswer,answerThree:"-"}});
        }
        else if (qOneAnswer===3 && qThreeAnswer && qTwoAnswer)
        {
            navigate("/Section_2",{state:{answerOne:"both",answerTwo:qTwoAnswer,answerThree:qThreeAnswer}});
        }
    }    
    
    return (
    <div>
    <h1>Section 1</h1>
    <p>1.Is your business model B2C or B2B or both?</p>
    <button id="answer_one" onClick={handleClick}>A.B2C</button>
    <button id="answer_two" onClick={handleClick}>B.B2B</button>
    <button id="answer_three" onClick={handleClick}>C.both</button>

    {qToShow===2 || qToShow===1? <div><p>2.Do you target all age brackets?</p>
    <button  id="answer_one"  onClick={() => setQTwoAnswer(1)}>A.yes</button>
    <button  id="answer_two"  onClick={() => setQTwoAnswer(2)}>B.no</button>
    </div>:null}

    {qToShow===3 || qToShow===1? <div><p>3.Do you target all industries?</p>
    <button id="answer_one"  onClick={() => setQThreeAnswer("yes")}>A.yes</button>
    <button id="answer_two"  onClick={() => setQThreeAnswer("no")}>B.no</button>
    </div>:null}
    <button style={{marginTop:"30px"}} onClick={handleClickOfNext}>Next</button>
    
    </div>)
}
export default Section_1;