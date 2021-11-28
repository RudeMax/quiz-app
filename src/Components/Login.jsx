import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Fab, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { loginUser } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";
import { fetchQuiz } from "../Redux/Actions";

function Login() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(name));
    dispatch(fetchQuiz());
    setName("");
    navigate("/quiz-intro");
  };
  return (
    <div className="login-page">
      <h1 className="logotype">QU⌛ZZ</h1>
      <h2>Welcome, contestant!</h2>

      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <TextField
          value={name}
          onChange={(e) => handleChange(e)}
          label={"Name:"}
        />
        <Fab
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            marginLeft: 15,
          }}
          disabled={!name}
          onClick={(e) => handleSubmit(e)}
        >
          <ArrowForwardIcon />
        </Fab>
      </form>
    </div>
  );
}

export default Login;
