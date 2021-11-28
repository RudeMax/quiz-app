import "./App.css";
import Login from "./Components/Login";
import QuizIntro from "./Components/QuizIntro";
import Quiz from "./Components/Quiz";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Results from "./Components/Results";
import LeaderBoard from "./Components/LeaderBoard";
import { setChart } from "./Redux/Actions";

function App() {
  const dispatch = useDispatch();

  const chart = JSON.parse(localStorage.getItem("chart")) || [];
  console.log("CHART:", chart);
  useEffect(() => {
    dispatch(setChart(chart));
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="quiz-intro" element={<QuizIntro />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Results />} />
          <Route path="leaderBoard" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
