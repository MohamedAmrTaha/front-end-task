import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function Section_1(){
    const [qOneAnswer, setQOneAnswer] = useState(0);
    const [qTwoAnswer, setQTwoAnswer] = useState("");
    const [qThreeAnswer, setQThreeAnswer] = useState("");
    const navigate = useNavigate();
    function handleClick(e)
    {
        let id = e.target.id;
        if(id ==="answer_one")
        {
            
            setQOneAnswer(1);
            setQThreeAnswer("")
            
        }
        else if (id ==="answer_two")
        {

            setQOneAnswer(2);
            setQTwoAnswer("")
        }
        else if (id ==="answer_three")
        {
            setQOneAnswer(3);
            setQTwoAnswer("")
            setQThreeAnswer("")
            
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
     <Button variant="contained" style={{marginLeft:"30px", backgroundColor:qOneAnswer===1?"#00ccff":"#1976d2"}} id="answer_one" onClick={handleClick}>A.B2C</Button>
     <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qOneAnswer===2?"#00ccff":"#1976d2"}} id="answer_two" onClick={handleClick}>B.B2B</Button>
     <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qOneAnswer===3?"#00ccff":"#1976d2"}} id="answer_three" onClick={handleClick}>C.both</Button>

     {qOneAnswer===2 ? 
     <div>
        <p>2.Do you target all age brackets?</p>
        <Button variant="contained" style={{marginLeft:"30px", backgroundColor:qTwoAnswer==="yes"?"#00ccff":"#1976d2"}} id="answer_one"  onClick={() => setQTwoAnswer("yes")}>A.yes</Button>
        <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qTwoAnswer==="no"?"#00ccff":"#1976d2"}} id="answer_two"  onClick={() => setQTwoAnswer("no")}>B.no</Button>
     </div>:null}

     {qOneAnswer===1 ? 
     <div>
        <p>2.Do you target all industries?</p>
        <Button variant="contained" style={{marginLeft:"30px", backgroundColor:qThreeAnswer==="yes"?"#00ccff":"#1976d2"}} id="answer_one"  onClick={() => setQThreeAnswer("yes")}>A.yes</Button>
        <Button variant="contained" style={{marginLeft:"30px", backgroundColor:qThreeAnswer==="no"?"#00ccff":"#1976d2"}} id="answer_two"  onClick={() => setQThreeAnswer("no")}>B.no</Button>
     </div>:null}

     {qOneAnswer===3 ?
     <div>
        <p>2.Do you target all age brackets?</p>
        <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qTwoAnswer==="yes"?"#00ccff":"#1976d2"}} id="answer_one"  onClick={() => setQTwoAnswer("yes")}>A.yes</Button>
        <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qTwoAnswer==="no"?"#00ccff":"#1976d2"}} id="answer_two"  onClick={() => setQTwoAnswer("no")}>B.no</Button>
        <p>3.Do you target all industries?</p>
        <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qThreeAnswer==="yes"?"#00ccff":"#1976d2"}} id="answer_one"  onClick={() => setQThreeAnswer("yes")}>A.yes</Button>
        <Button variant="contained" style={{marginLeft:"30px",backgroundColor:qThreeAnswer==="no"?"#00ccff":"#1976d2"}} id="answer_two"  onClick={() => setQThreeAnswer("no")}>B.no</Button>
     </div>:null}

     {(qOneAnswer===1 && qThreeAnswer) || (qOneAnswer===2 && qTwoAnswer) || (qOneAnswer===3 && qThreeAnswer && qTwoAnswer)?
        <Button variant="contained" style={{marginTop:"30px"}} onClick={handleClickOfNext}>Next</Button>:null}
    </div>)
}
export default Section_1;