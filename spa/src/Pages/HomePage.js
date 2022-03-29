import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function HomePage(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/Section_1");
    }
    return (<div className="text-center"><Button onClick={handleClick}variant="outlined" size="large">generate business
    plan</Button>
    </div>);
    }
export default HomePage;