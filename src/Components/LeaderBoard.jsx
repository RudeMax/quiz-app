import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { refreshQuiz } from "../Redux/Actions";

function LeaderBoard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.quiz.chart);
  const quizResult = useSelector((state) => state.quiz.quizResult);

  function compare(a, b) {
    if (a.highScore < b.highScore) {
      return 1;
    }
    if (a.highScore > b.highScore) {
      return -1;
    }
    return 0;
  }

  data.sort(compare);

  console.log(data);

  const handleClick = () => {
    localStorage.setItem("chart", JSON.stringify(data));
    dispatch(refreshQuiz());
    navigate("/");
  };
  return (
    <div className="leaders">
      {data.map(
        (result) =>
          data.indexOf(result) <= 4 && (
            <div key={data.indexOf(result)} className="leaders-result">
              {data.indexOf(result) > 2 && data.indexOf(result) + 1}{" "}
              {data.indexOf(result) === 0 && (
                <img
                  className="first"
                  src="https://cdn-icons-png.flaticon.com/512/744/744984.png"
                  alt=""
                />
              )}
              {data.indexOf(result) === 1 && (
                <img
                  className="second"
                  src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
                  alt=""
                />
              )}
              {data.indexOf(result) === 2 && (
                <img
                  className="third"
                  src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
                  alt=""
                />
              )}
              {result.userName} : {result.highScore}
            </div>
          )
      )}
      <div className="your-place">
        <div>
          <p>Your place is: </p>
          {data.map(
            (result) =>
              result.highScore === quizResult && (
                <h1 key={data.indexOf(result)} className="place">
                  {data.indexOf(result) + 1}
                </h1>
              )
          )}
        </div>
      </div>
      <Button color="secondary" onClick={handleClick}>
        try again
      </Button>
    </div>
  );
}

export default LeaderBoard;
