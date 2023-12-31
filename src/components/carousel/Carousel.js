import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

import carouselImage1 from '../../assets/images/HS1.png';
import carouselImage2 from '../../assets/images/HS2.jpg';
import carouselImage3 from '../../assets/images/HS3.jpg';

function CarouselComponent() {
  return (
      <Carousel fade className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block"
            src={carouselImage1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={carouselImage2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={carouselImage3}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
  );
}

export default CarouselComponent;