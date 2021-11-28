import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateResult } from "../Redux/Actions";

function Results() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.login.currentUser);
  const result = useSelector((state) => state.quiz.quizResult);
  const newHighScore = { userName: user, highScore: result };

  const handleClick = () => {
    dispatch(updateResult(newHighScore));
    navigate("/leaderBoard");
  };
  return (
    <div>
      <h2>Congrats, {user}!</h2>
      <h3>your result is:</h3>
      <h1>{result}</h1>
      <Button onClick={handleClick} color="success">
        Check the leaderboard!
      </Button>
    </div>
  );
}

export default Results;
