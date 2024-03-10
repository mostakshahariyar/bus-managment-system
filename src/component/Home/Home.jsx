import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/banner2.jpeg";
import './Home.css';
const Home = () => {
  return (
    <div className='mb-5'>
        <Carousel className='md:mx-28 mx-[5%] mt-8 relative z-0 flex flex-col justify-center mb-8 items-center' autoPlay='1000' emulateTouch={true} infiniteLoop={true} centerSlidePercentage={true} dynamicHeight={true}
    preventMovementUntilSwipeScrollTolerance={true} >
                <div>
                    <img src={banner} />
                    <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident sunt earum amet facilis culpa atque facere suscipit? Voluptas, vel.</p>
                </div>
                <div>
                    <img src={banner1} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos, adipisci deserunt consequatur mollitia dolorum maxime! Obcaecati, ratione. Provident, laborum.</p>
                </div>
                <div>
                    <img src={banner}/>
                    <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iste corporis iusto quam similique fugit excepturi! Mollitia asperiores laudantium recusandae a, error perspiciatis, vitae ducimus illo reprehenderit repellendus iusto quam?</p>
                </div>
            </Carousel>
            <div>
                <p className='md:text-5xl text-3xl font-semibold text-center'>Introducing you to the UR travel way of life</p>
            </div>
    </div>
  )
}

export default Home
