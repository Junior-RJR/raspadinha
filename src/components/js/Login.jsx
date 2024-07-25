import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/raspadinha');
  };

  return (
    <div className="login-container">
      {/* <div className="heart"></div> */}
      <p className="message">Me tire uma duvida aqui...</p>
      <p className="message">Você tem um marido top?<br/>Um cara maravilhoso e sensacional?<br/> Tem ou não?</p>
      <button className="login-button" onClick={handleClick}>
        Sim, eu tenho
      </button>
      <button className="login-button-error" onClick={handleClick}>
       Não, infelizmente
      </button>
    </div>
  );
};

export default Login;
