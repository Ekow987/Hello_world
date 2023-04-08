import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
 import Slider_1 from '../img/hopital-109.jpeg';
import Slider_2 from '../img/hops3.jpg';
 import Slider_3 from '../img/hops123.jpg';


function Slider() {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Slider_1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sumsumg Galaxy</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Slider_2}
      alt="Second Slide"
    />
    <Carousel.Caption>
      <h3>Laptops</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider_3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Iphones</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Slider;
