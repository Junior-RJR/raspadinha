import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Agradecimento.css';

const Agradecimento = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/premio1');
  };

  return (
    <div className="agradecimento-container">
      <p>
        Meu amor, sei o quanto você batalha e luta por nós, eu sou muito grato a Deus por ter você na minha vida. 
        Sei que temos falhas, mas nada apaga o que você faz por mim.
        Obrigado por cuidar do nosso lar tão bem, tão detalhista e sempre com amor.
      </p>
      <p>
        Tudo o que fazemos é para agradar o outro e espero sempre conseguir te fazer a mulher mais feliz do mundo.
        Isso que fiz é apenas uma brincadeira de forma de agradecimento para você. Então curta, espero que goste e dê muita risada, 
        hihihihi.
      </p>
      <p>
        Amo você, minha marrentinha!
      </p>
      <button className="advance-button" onClick={handleClick}>
        Avançar
      </button>
    </div>
  );
};

export default Agradecimento;
