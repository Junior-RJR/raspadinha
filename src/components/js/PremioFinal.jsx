import React, { useState } from 'react';
import '../css/PremioFinal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PremioFinal = () => {
  const [showPrize, setShowPrize] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pixNumber, setPixNumber] = useState('');

  const handleRedeemPrize = () => {
    setShowPrize(true);
  };

  const handleRequestPix = () => {
    setModalIsOpen(true);
  };

  const handlePixNumberChange = (e) => {
    setPixNumber(e.target.value);
  };

  const handleSendPixRequest = () => {
    const message = `Oi, sou a esposa de sorte em ter você, faz o pix de 50 reais pro hot roll hoje meu amor, número do pix é esse ${pixNumber}  Depois libero o cool pra ti aakakakka`;
    const whatsappUrl = `https://wa.me/5511946252220?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setModalIsOpen(false);
  };

  return (
    <div className="premio-final-container">
      {!showPrize ? (
        <div className="initial-message">
          <h1>Parabéns! Você ganhou um prêmio para hoje!</h1>
          <p>Você é uma esposa de sorte!</p>
          <button className="redeem-prize-button" onClick={handleRedeemPrize}>
            Resgatar prêmio
          </button>
        </div>
      ) : (
        <div className="prize-message">
          <h1>R$50 para comer HOT ROLL uhuuuhhuuull</h1>
          <button className="request-pix-button" onClick={handleRequestPix}>
            Pedir o PIX
          </button>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Pedir PIX"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Digite o número do PIX</h2>
        <input
          type="text"
          value={pixNumber}
          onChange={handlePixNumberChange}
          placeholder="Número do PIX"
        />
        <button className="send-pix-button" onClick={handleSendPixRequest}>
          Pedir PIX
        </button>
      </Modal>
    </div>
  );
};

export default PremioFinal;
