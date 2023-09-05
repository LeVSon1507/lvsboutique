import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MainCarousel.css';

const items = [
   <img className='item' src='src/assets/Image/banner3.png' data-value='1'></img>,
   <img className='item' src='src/assets/Image/banner2.png' data-value='2'></img>,
   <img className='item' src='src/assets/Image/banner3.png' data-value='3'></img>,
   <img className='item' src='src/assets/Image/banner4.png' data-value='4'></img>,
];

export const MainCarousel = () => (
   <AliceCarousel
      mouseTracking
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      items={items}
      infinite
   />
);
