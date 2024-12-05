import React from 'react'
import { Carousel} from 'react-bootstrap';
import slide03 from '../static/slide03.jpg'
import P2 from '../static/P2.png'
import P4 from '../static/P4.png'

function Home() {
  return (
    <div className="row">
       <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={P2}
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={P4}
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home
