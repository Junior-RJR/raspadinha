import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Premio2.css';

const Premio2 = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [message, setMessage] = useState('');
  const [showPrize, setShowPrize] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleValidate = () => {
    const correctAnswers = ['pepsi black', 'fanta maracujá'];
    const userAnswers = [inputValue1.toLowerCase(), inputValue2.toLowerCase()];

    if (correctAnswers.every((answer) => userAnswers.includes(answer))) {
      setShowPrize(true);
      setMessage('');
      setShowError(false);
    } else {
      setMessage('Fiu fiu fiu, você perdeu. Tente de novo!');
      setShowError(true);
      setShowPrize(false);
    }
  };

  const handleNextPrize = () => {
    navigate('/premio3');
  };

  return (
    <div className="premio-container">
      <h1>Qual os dois refrigerantes que eu mais gosto?</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={handleInputChange1}
        placeholder="eai????"
      />
      <input
        type="text"
        value={inputValue2}
        onChange={handleInputChange2}
        placeholder="nao vai errar einnn kkkkk"
      />
      <button className="validate-button" onClick={handleValidate}>
        Validar
      </button>
      {showError && <p className="error-message">{message}</p>}
      {showPrize && (
        <div className="prize-container">
          <h2>Parabéns!</h2>
          <p>Seu prêmio é um abraçãaaooooo!</p>
          <div className="prize-animation">
            🤗
          </div>
          <button className="next-prize-button" onClick={handleNextPrize}>
            Próximo prêmio uhuuul
          </button>
        </div>
      )}
    </div>
  );
};

export default Premio2;
