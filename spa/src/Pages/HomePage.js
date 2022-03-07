import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HomePage(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/Section_1");
    }
    return (<div class="text-center"><Button onClick={handleClick}variant="outlined" size="large">generate business
    plan</Button>
    </div>);
    }
export default HomePage;