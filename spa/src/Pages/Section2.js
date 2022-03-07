import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Section_2(props)
{
    const[disable,setDisable] = useState(true);
    const [qOneAnswer, setQOneAnswer] = useState(null);
    const [qTwoAnswer,setQTwoAnswer] = useState("");
    const navigate = useNavigate();
    function handleClick(e)
    {
        let id = e.target.id;
        if(id ==="answer_one")
        {
            setDisable(false);
            setQOneAnswer(1)
            
        }
        else if (id ==="answer_two")
        {
            setDisable(true);
            setQOneAnswer(2)
        }
        
    };
    
    function handleChange(e){
        let answer=e.target.value;
        answer=parseInt(answer);
        let x = answer<0 ? 0:answer;
        setQTwoAnswer(x);
    }
    const {state}  = useLocation();

    console.log(state)
    function handleClickOfNext(){
        if (qOneAnswer===1 && qTwoAnswer !=="")
        {
            navigate("/AnswersPage",{state:{ sectionOneAnswers:{answerOne:state.answerOne, answerTwo:state.answerTwo, answerThree:state.answerThree},
            sectionTwoAnswers:{answerOne:"yes",answerTwo:qTwoAnswer}}});
        }
        else if (qOneAnswer===2 && qTwoAnswer==="")
        {
            navigate("/AnswersPage",{state:{ sectionOneAnswers:{answerOne:state.answerOne, answerTwo:state.answerTwo, answerThree:state.answerThree},
            sectionTwoAnswers:{answerOne:"no",answerTwo:"-"}}});
        }
    }   
    console.log(qTwoAnswer);
    return (
    <div>
        <h1>Section 2</h1>
        <div>
        <p>1. Did you have an investment?</p>
        <button id="answer_one" onClick={handleClick}>A.yes</button>
        <button id="answer_two" onClick={handleClick}>B.no</button>
        </div>
    
        <div>
        <p>2.how much was the investment?</p>
        <input type="number" min="0" disabled={disable} onChange={handleChange} value={qTwoAnswer}></input>
        </div>

        <button style={{marginTop:"30px"}} onClick={handleClickOfNext}>Next</button>
        

    </div>)
}
export default Section_2;