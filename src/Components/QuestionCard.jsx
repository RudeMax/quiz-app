import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setResult } from "../Redux/Actions";

function QuestionCard() {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const [options, setOptions] = useState([]);
  const [date, setDate] = useState(new Date());
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [value, setValue] = useState("");

  const questions = useSelector((state) => state?.quiz?.quizData);
  const navigate = useNavigate();

  useEffect(() => {
    if (index === 10) {
      navigate("/result");
    } else {
      setOptions([
        ...questions?.[index].incorrect_answers,
        questions?.[index].correct_answer,
      ]);
    }
  }, [index, navigate, questions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          return 15;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (timer === 0) {
      setIndex(index + 1);
    }
  }, [timer]);

  const handleClick = (e) => {
    setScore(15000 - (new Date() - date));
    setValue(e.target.innerText);
    setCorrectAnswer(questions[index].correct_answer);
    setIndex(index + 1);
    setTimer(15);
    setDate(new Date());
  };

  useEffect(() => {
    value === correctAnswer && dispatch(setResult(score));
  }, [value]);

  return (
    <div className="question-box">
      <div className="question-card">
        <p>{questions?.[index]?.question}</p>
        <h1
          className="timer"
          style={{
            color:
              timer > 10
                ? "#66bb6a"
                : timer > 5
                ? "#ffa726"
                : timer === 0
                ? "#388e3c"
                : "#f44336",
          }}
        >
          {timer === 0 ? "GO" : timer}
        </h1>
        <div
          className="progress"
          style={{
            width: `${timer * 6.66}%`,
            height: "5px",
            margin: "auto",
            marginBottom: "10px",
            transition: "0.8s",
            background:
              timer > 10
                ? "#66bb6a"
                : timer > 5
                ? "#ffa726"
                : timer === 0
                ? "white"
                : "#f44336",
          }}
        ></div>
      </div>
      <div className="option-card">
        {options.map((option) => (
          <button onClick={(e) => handleClick(e)} key={Math.random() * 1000}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
