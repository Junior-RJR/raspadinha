import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Premio3.css';

const Premio3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [showPrize, setShowPrize] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleValidate = () => {
    if (inputValue === '10') {
      setShowPrize(true);
      setMessage('');
      setShowError(false);
    } else {
      setMessage('Fiu fiu fiu, você perdeu. Tente de novo!');
      setShowError(true);
      setShowPrize(false);
    }
  };

  const handleRedeemPrize = () => {
    navigate('/premiofinal');
  };

  return (
    <div className="premio-container">
      <h1>De 0 a 10, quanto eu sou Gostosão?</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite sua resposta"
      />
      <button className="validate-button" onClick={handleValidate}>
        Validar
      </button>
      {showError && <p className="error-message">{message}</p>}
      {showPrize && (
        <div className="prize-container">
          <h2>Parabénssssssss você acertou hahaha!</h2>
          <p>Agora o prêmio premium de hoje...</p>
          <div className="prize-animation">
            🥳🎉
          </div>
          <button className="redeem-prize-button" onClick={handleRedeemPrize}>
            Resgatar prêmio
          </button>
        </div>
      )}
    </div>
  );
};

export default Premio3;
