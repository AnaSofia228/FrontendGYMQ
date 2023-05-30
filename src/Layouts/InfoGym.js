import React from 'react';
import ImageCarousel from './ImageZoom';

const InfoGym = () => {
    const images = [
        {
          src: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1680128439/logo_yp653j.jpg',
          alt: 'Descripción de la imagen 1',
        },
        {
          src: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1680128439/logo_yp653j.jpg',
          alt: 'Descripción de la imagen 2',
        },
        // Agrega más objetos de imagen según sea necesario
      ];

  return (
    <div className="gyms">
      <div className='imgGym'>
        {/* <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685371157/ImagenC_davwiy.png'/> */}
      </div>
      <div className='informationGym'>
        <h2>Nombre de la empresa</h2>
        <div className='dateGym'>
            <p>xxx-xxx-xxxx</p>
            <p>info@empresa.com</p>
            <p>www.empresa.com</p>
        </div>
        <div className='schedule'>
            <h3>Horario de Atención:  00:00 - 00:00</h3>
        </div>

            <div className="imagePlace">
                <ImageCarousel images={images} />
            </div>

            <div className="worker">
                <div className='workerGym'>
                    <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685402217/ImagenE_uxiyfq.png'/>
                    <h3>Entrenador</h3>
                    <h3>Horario: Mañana</h3>
                    <p>xxx-xxx-xxx</p>
                </div>
                <div className='workerGym'>
                    <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685402217/ImagenE_uxiyfq.png'/>
                    <h3>Entrenador</h3>
                    <h3>Horario: Tarde</h3>
                    <p>xxx-xxx-xxx</p>
                </div>
                <div className='workerGym'>
                    <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685402217/ImagenE_uxiyfq.png'/>
                    <h3>Entrenador</h3>
                    <h3>Horario: Noche</h3>
                    <p>xxx-xxx-xxx</p>
                </div>
            </div>
      </div>
    </div>
  );
}

export default InfoGym;
