import { MainCarousel } from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';

function Homepage() {
   return (
      <div>
         <MainCarousel />
         <div>
            <HomeSectionCarousel />
         </div>
      </div>
   );
}

export default Homepage;
