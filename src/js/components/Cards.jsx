import React from 'react';
import homerImage from '../../img/Homer.png';
import margeImage from '../../img/Marge.png';
import bartImage from '../../img/Bart.png';
import lisaImage from '../../img/Lisa.png';

const Cards = () => {
  return (
    <div 
      className="py-4" 
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '2rem'
      }}
    >
      {/* --- Tarjeta Homer --- */}
      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="card-img-container">
          <img src={homerImage} className="card-img-top" alt="Homer Simpson" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Homer Simpson</h5>
          <p className="card-text">Patriarca de la familia y amante de las rosquillas.</p>
          <a href="#" className="btn btn-primary">¡D'oh!</a>
        </div>
      </div>

      {/* --- Tarjeta Marge --- */}
      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="card-img-container">
          <img src={margeImage} className="card-img-top" alt="Marge Simpson" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Marge Simpson</h5>
          <p className="card-text">La paciente y optimista madre de la familia.</p>
          <a href="#" className="btn btn-primary">¡Mmm!</a>
        </div>
      </div>

      {/* --- Tarjeta Bart --- */}
      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="card-img-container">
          <img src={bartImage} className="card-img-top" alt="Bart Simpson" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Bart Simpson</h5>
          <p className="card-text">El hijo mayor, un niño travieso y rebelde.</p>
          <a href="#" className="btn btn-primary">¡Multiplícate!</a>
        </div>
      </div>

      {/* --- Tarjeta Lisa --- */}
      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="card-img-container">
          <img src={lisaImage} className="card-img-top" alt="Lisa Simpson" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Lisa Simpson</h5>
          <p className="card-text">La hija mediana, una niña prodigio de ocho años.</p>
          <a href="#" className="btn btn-primary">¡Confía en ti!</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;