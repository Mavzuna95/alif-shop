import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

export default function SliderComponent() {
    const settings = {
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows:false,
    autoplay: true
  };
  return (
    <Container fluid className='ms-4 mt-5'>
    <Slider {...settings} className='slide w-100'>
      <div>
            <img src="./img/carousel.jpg" alt="" />
      </div>
      <div>
            <img src="./img/carousel2.jpg" alt="" />
      </div>
    </Slider>
    </Container>
  );

}