import React, { useState } from 'react';
import  Cards  from '../Ui/Cards';

const CardComponent = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderCards = () => {
    // Aquí puedes reemplazar "data" con tu propio conjunto de datos de tarjetas
    const data = [
      { id: 1, buttonId: 'button1', content: <div><div className='store-cards'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <div className='store-cards'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div></div> },
      { id: 2, buttonId: 'button2', content: <div><div className='store-cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    <div className='store-cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div></div> },
      { id: 3, buttonId: 'button3', content: <div><div className='store-cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    <div className='store-cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div></div> },
      { id: 4, buttonId: 'button4', content: <div><div className='store-cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    <div className='store-cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div></div> },
    ];

    // Filtra las tarjetas basadas en el botón seleccionado
    const filteredCards = data.filter((card) => card.buttonId === selectedButton);

    return filteredCards.map((card) => (
      <div key={card.id}>{card.content}</div>
    ));
  };

  return (
    <>
    <div className='buttons'>
      <button className='btns' onClick={() => handleButtonClick('button1')}>Brazo</button>
      <button className='btns' onClick={() => handleButtonClick('button2')}>Espalda</button>
      <button className='btns' onClick={() => handleButtonClick('button3')}>Glúteo</button>
      <button className='btns' onClick={() => handleButtonClick('button4')}>Pierna</button>
    </div>
      {renderCards()}
    </>
  );
};

export default CardComponent;
