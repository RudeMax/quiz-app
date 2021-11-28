import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function QuizIntro() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/quiz");
  };
  return (
    <div>
      <h1 className="logotype">QU⌛ZZ</h1>
      <h2>Welcome, {user}</h2>
      <div className="roules-wrap">
        <ul className="roules">
          <li>
            You are about to complete our quizz that consistst of 10 question.
          </li>
          <li>
            For each question you have only <span>15</span> seconds.
          </li>
          <li>
            Each question can gice you up to 15 points. The faster you answer,
            the more points you get
          </li>
          <li>
            If you don't answer within 15 seconds, you answer will be considered
            as false and will not get any points.{" "}
          </li>
        </ul>
      </div>
      <div className="start-quiz">
        <h4>If you are ready, hit this button 👉</h4>
        <Button
          onClick={handleStart}
          variant="contained"
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            marginLeft: 15,
          }}
        >
          START
        </Button>
      </div>
    </div>
  );
}

export default QuizIntro;

// useSelector((state) => state.login.currentUser)
