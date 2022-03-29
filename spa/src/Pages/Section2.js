import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Section_2(props)
{
    const[disable,setDisable] = useState(true);
    const [qOneAnswer, setQOneAnswer] = useState(0);
    const [qTwoAnswer,setQTwoAnswer] = useState(0);
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
            // setQTwoAnswer("")
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

    function handleClickOfNext(){
        if (qOneAnswer===1 && qTwoAnswer !=="")
        {
            navigate("/AnswersPage",{state:{ sectionOneAnswers:{answerOne:state.answerOne, answerTwo:state.answerTwo, answerThree:state.answerThree},
            sectionTwoAnswers:{answerOne:"yes",answerTwo:qTwoAnswer}}});
        }
        else if (qOneAnswer===2 && qTwoAnswer===0)
        {
            navigate("/AnswersPage",{state:{ sectionOneAnswers:{answerOne:state.answerOne, answerTwo:state.answerTwo, answerThree:state.answerThree},
            sectionTwoAnswers:{answerOne:"no",answerTwo:"-"}}});
        }
    }   
    return (
    <div>
        <h1>Section 2</h1>
        <div>
            <p>1. Did you have an investment?</p>
            <Button variant="contained" style={{marginLeft:"30px", backgroundColor:qOneAnswer===1?"#00ccff":"#1976d2"}} id="answer_one" onClick={handleClick}>A.yes</Button>
            <Button variant="contained" style={{marginLeft:"30px", backgroundColor:qOneAnswer===2?"#00ccff":"#1976d2"}} id="answer_two" onClick={handleClick}>B.no</Button>
        </div>
    
        <div>
            <p>2.how much was the investment?</p>
            <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="standard"
            min="0" 
            disabled={disable} 
            onChange={handleChange} 
            value={qTwoAnswer}
            defaultValue="0"
            />
        </div>
        {(qOneAnswer===1 && qTwoAnswer !=="") || (qOneAnswer===2 && qTwoAnswer===0) ?
            <Button variant="contained" style={{marginTop:"30px"}} onClick={handleClickOfNext}>Next</Button>:null}
        
    </div>)
}
export default Section_2;