import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Grid.css';
import image1 from '../../Img/cleaning1.jpg';
import image2 from '../../Img/gardener.webp';
import image3 from '../../Img/movingtrucks1.png';
import "bootstrap/dist/css/bootstrap.css"

function GridList() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='background-color'>
      <Carousel activeIndex={index} onSelect={handleSelect} pause={'hover'}>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>No more Stressful moving</h3>
            <p>We have your back</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img2"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shipping</h3>
            <p>Australia Wide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img3"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Help out a mate</h3>
            <p>
              For your favourite mates
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GridList;