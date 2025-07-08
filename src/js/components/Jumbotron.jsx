import React from 'react';
import { Button } from 'react-bootstrap'; 
import couchImage from '../../img/fondo-jumbotron.jpg';

const Jumbotron = () => {
  return (
    <div
      className="p-5 my-4 text-center bg-image rounded-3 jumbotron-bg"
      style={{
        backgroundImage: `url(${couchImage})`,
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          
          <div 
            className="text-white" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
          >
          
            <h1 className="mb-3" style={{ fontSize: '4rem', color: 'white' }}>¡Bienvenidos!</h1>
            

            <h4 className="mb-4" style={{ fontFamily: 'Nunito, sans-serif', color: 'white' }}>
              Estas en web de la familia más amarilla de la TV.
            </h4>
            
            <Button variant="primary" size="lg" href="#!">
              Ver Personajes
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Jumbotron;