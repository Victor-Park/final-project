import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css';

export default function Slider() {
  return (
    <div className="carousel-container">
      <Carousel fade interval={3000} nextIcon={false} prevIcon={false}>
        <Carousel.Item>
          <img
            className="w-100"
            src="/sliderImages/suter.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="/sliderImages/battery.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="/sliderImages/brakes.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="/sliderImages/i2m.jpeg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="/sliderImages/plasticbike.jpeg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="/sliderImages/suspension.jpeg"
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
