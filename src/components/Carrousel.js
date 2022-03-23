import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import imagen1 from '../images/blue-sky-1109512_960_720.webp'
import imagen2 from '../images/kisspng-logo-sail-racing-oracle-tee-grey-violet-brand-font-database-page-3-of-5-azoft-5bd0f1e745a800.2724114915404200712853.png'
import '../components/Carrusel.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className='carIMG' src={imagen1} onDragStart={handleDragStart} role="presentation" />,
  <img className='carIMG' src={imagen2} onDragStart={handleDragStart} role="presentation" />,
  <img className='carIMG' src={imagen1} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}


export default Gallery;