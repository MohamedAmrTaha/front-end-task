import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";

function AnswersPage(props)
{
    
    const {state:{sectionOneAnswers,sectionTwoAnswers}}  = useLocation();
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
        <Button variant="contained" style={{marginTop:"30px"}} onClick={handleClick}>submit</Button>
    </div>



    );


};
export default AnswersPage;