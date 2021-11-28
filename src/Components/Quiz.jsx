import { Button } from "@mui/material";
import React from "react";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="question">
        <QuestionCard />
      </div>
      <Button onClick={handleClick}>STOP</Button>
    </div>
  );
}

export default Quiz;
