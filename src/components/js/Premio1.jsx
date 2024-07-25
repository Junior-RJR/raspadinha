import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Premio1.css';

const Premio1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [showPrize, setShowPrize] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleValidate = () => {
    if (inputValue.toLowerCase() === 'marrentinha') {
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
    navigate('/premio2');
  };

  return (
    <div className="premio-container">
      <h1>Qual o apelido que eu te chamo?</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite seu apelido"
      />
      <button className="validate-button" onClick={handleValidate}>
        Validar
      </button>
      {showError && <p className="error-message">{message}</p>}
      {showPrize && (
        <div className="prize-container">
          <h2>Parabéns!</h2>
          <p>Seu prêmio é um beijãoooo!</p>
          <div className="prize-animation">
            😘👄
          </div>
          <button className="next-prize-button" onClick={handleNextPrize}>
            Próximo prêmio uhuuul
          </button>
        </div>
      )}
    </div>
  );
};

export default Premio1;
