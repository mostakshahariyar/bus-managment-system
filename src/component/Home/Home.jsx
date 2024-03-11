import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "tiny-slider/dist/tiny-slider.css";
import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/banner2.jpeg";
import booking from "../../assets/booking.jpg";
import happyClint from "../../assets/happyClient.png";
import routes from "../../assets/route.png";
import ticketsSold from "../../assets/tickets_sold.png";
import tour from "../../assets/tour.jpg";

import "./Home.css";
const Home = () => {
  const imgs = [
    { loadingImage: "https://i.ibb.co/tmSRnGB/Saintmartin-2020-208x78.png" },
    { loadingImage: "https://i.ibb.co/RTgwZFL/Chakladar-208x78.png" },
    {
      loadingImage:
        "https://i.ibb.co/Kqbs2Py/green-line-paribahan-208x78-1.png",
    },
    { loadingImage: "https://i.ibb.co/r4WJHXK/Purabi-Paribahan-208x78.png" },
    { loadingImage: "https://i.ibb.co/mt65cyb/Green-Express-208x78.png" },
    { loadingImage: "https://i.ibb.co/vP6XcjH/shah-ali-paribahan.jpg" },
    { loadingImage: "https://i.ibb.co/ZHwT0Qb/ena.jpg" },
    { loadingImage: "https://i.ibb.co/dkCbLVN/sr.png" },
    { loadingImage: "https://i.ibb.co/NYdqQDB/hanif.jpg" },
    { loadingImage: "https://i.ibb.co/m95jhBP/SR-travels-208x78.png" },
    { loadingImage: "https://i.ibb.co/C9NkWTb/Hanif-AC-208x78.png" },
    {
      loadingImage:
        "https://i.ibb.co/x5kpcrY/Ena-transport-prvt-Ltd-208x78.png",
    },
    { loadingImage: "https://i.ibb.co/cYkTR2t/nabil-paribahan-208x78.png" },
    {
      loadingImage:
        "https://i.ibb.co/Kqbs2Py/green-line-paribahan-208x78-1.png",
    },
    { loadingImage: "https://i.ibb.co/XZ5DFXz/Saintmartin-Hyunday-208x78.png" },
    {
      loadingImage: "https://i.ibb.co/PZLqTVG/Soudia-coach-services-208x78.png",
    },
    { loadingImage: "https://i.ibb.co/3cL9Z8v/Akota-transport-208x78.png" },
    { loadingImage: "https://i.ibb.co/WDBgwjB/tungipara-express-208x78.png" },
    { loadingImage: "https://i.ibb.co/BcbWWmj/MANIK-EXPRESS-208x78.png" },
    { loadingImage: "https://i.ibb.co/DGtjYVF/Al-Hamra-208x78.png" },
    {
      loadingImage: "https://i.ibb.co/znGG29N/Saint-martin-travels-208x78.png",
    },
    { loadingImage: "https://i.ibb.co/NYspcsM/Agomoni-express-208x78.png" },
    { loadingImage: "https://i.ibb.co/8rRGkfK/Orin-travels-208x78.png" },
    { loadingImage: "https://i.ibb.co/tKjJFMc/royal-Coach-208x78.png" },
    { loadingImage: "https://i.ibb.co/Fh0DKVt/Shohag-paribahan-208x78.png" },
    { loadingImage: "https://i.ibb.co/QYSKWY4/Emad-208x78.png" },
    { loadingImage: "https://i.ibb.co/rmQtKTn/SP-Golden-Line-208x78.png" },
    { loadingImage: "https://i.ibb.co/7JZBzXv/Star-Line-208x78.png" },
    { loadingImage: "https://i.ibb.co/Y74p6b8/Diganta-Paribahan-208x78.png" },
    { loadingImage: "https://i.ibb.co/zNxxC1V/SHAMIM-Enterprise-208x78.png" },
    { loadingImage: "https://i.ibb.co/Q9nTdsG/Barkat-Travels-208x78.png" },
    { loadingImage: "https://i.ibb.co/SmrD1W1/HAQUE-208x78.png" },
    { loadingImage: "https://i.ibb.co/VJNph2g/M-R-Enterprise-208x78.png" },
    { loadingImage: "https://i.ibb.co/rQnmFNx/Sagorika-208x78.png" },
    { loadingImage: "https://i.ibb.co/9TgyThB/Tuba-line-208x78.png" },
    { loadingImage: "https://i.ibb.co/k2vxmL9/Unity-208x78.png" },
    { loadingImage: "https://i.ibb.co/M58NCnP/Sheba-Green-Line-208x78.png" },
    { loadingImage: "https://i.ibb.co/wNJ6G6V/KANAK-208x78.png" },
    { loadingImage: "https://i.ibb.co/mrWjJkV/Tanzila-208x78.png" },
    { loadingImage: "https://i.ibb.co/mHmvW3Y/Khaja-Travels-208x78.png" },
  ];
  return (
    <div className="pb-10 mt-20 bg-[#eaf9e7]">
      <Carousel
        className="md:mx-28 mx-[5%] pt-8 relative z-0 flex flex-col justify-center mb-8 items-center"
        autoPlay="1000"
        emulateTouch={true}
        infiniteLoop={true}
        centerSlidePercentage={true}
        dynamicHeight={true}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        <div>
          <img src={banner} />
          <p className="legend">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            provident sunt earum amet facilis culpa atque facere suscipit?
            Voluptas, vel.
          </p>
        </div>
        <div>
          <img src={banner1} />
          <p className="legend">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            quos, adipisci deserunt consequatur mollitia dolorum maxime!
            Obcaecati, ratione. Provident, laborum.
          </p>
        </div>
        <div>
          <img src={banner} />
          <p className="legend">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            iste corporis iusto quam similique fugit excepturi! Mollitia
            asperiores laudantium recusandae a, error perspiciatis, vitae
            ducimus illo reprehenderit repellendus iusto quam?
          </p>
        </div>
      </Carousel>
      <div>
        <p className="md:text-5xl text-3xl font-madimi font-semibold text-center">
          Introducing you to the UR travel way of life
        </p>
        <p className="text-center sm:px-0 px-4 text-gray-500 py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, similique nesciunt sequi est voluptates totam.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:mx-28 mx-[5%] pt-8">
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center">
            <img className="rounded-t-lg" src={tour} alt="family tour photo" />
            <p className="py-3 text-center text-white text-xl">
              First tickets for{" "}
              <span className="font-bold text-[#dc654d]">10%</span> discount
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center ">
            <img className="rounded-t-lg" src={booking} alt="Booking tickets" />
            <p className="py-3 text-center text-white text-xl">
              Easy to booking
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center">
            <img className="rounded-t-lg" src={tour} alt="family tour photo" />
            <p className="py-3 text-center text-white text-xl">
              First tickets for{" "}
              <span className="font-bold text-[#dc654d]">10%</span> discount
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center ">
            <img className="rounded-t-lg" src={booking} alt="Booking tickets" />
            <p className="py-3 text-center text-white text-xl">
              Easy to booking
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center">
            <img className="rounded-t-lg" src={tour} alt="family tour photo" />
            <p className="py-3 text-center text-white text-xl">
              First tickets for{" "}
              <span className="font-bold text-[#dc654d]">10%</span> discount
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center ">
            <img className="rounded-t-lg" src={booking} alt="Booking tickets" />
            <p className="py-3 text-center text-white text-xl">
              Easy to booking
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center">
            <img className="rounded-t-lg" src={tour} alt="family tour photo" />
            <p className="py-3 text-center text-white text-xl">
              First tickets for{" "}
              <span className="font-bold text-[#dc654d]">10%</span> discount
            </p>
          </div>
          <div className="flex flex-col border-none rounded-lg bg-[#188a62] lg:items-center ">
            <img className="rounded-t-lg" src={booking} alt="Booking tickets" />
            <p className="py-3 text-center text-white text-xl">
              Easy to booking
            </p>
          </div>
        </div>
      </div>
      {/* Our Trusted Partners */}
      <div>
        <p className="text-center font-bold font-madimi text-5xl pt-10">
          Our Trusted Partners
        </p>
        <div className="flex items-center py-5 justify-center">
          <Carousel
            className="flex overflow-hidden w-11/12 items-center justify-center"
            autoPlay="1000"
            emulateTouch={true}
            infiniteLoop={true}
            centerSlidePercentage={true}
            dynamicHeight={true}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            {imgs.map((el, index) => (
              <div key={index}>
                <img
                  className="h-[30px]"
                  src={el.loadingImage}
                  data-src={el}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* client review */}
      <div>
        <p className="text-center font-bold font-madimi text-5xl py-10">
          Clients Review
        </p>
        <div className="bg-[#188a62] flex items-center justify-center">
          <div className="lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-y-0 md:gap-x-20 py-2 items-center justify-center w-10/12">
            <div className="flex md:mt-0 mt-3 items-center justify-center">
              <img
                className="w-[90px] h-[90px]"
                src={ticketsSold}
                alt="sold tickets"
              />
              <div>
                <p className="text-white font-semibold text-3xl flex items-center justify-center">
                  10{" "}
                  <span className="font-roboto font-bold pl-1"> Million +</span>
                </p>
                <small className="text-white text-lg">Tickets Sold</small>
              </div>
            </div>
            <div className="flex gap-x-5 items-center justify-center">
              <img
                className="w-[90px] h-[90px]"
                src={routes}
                alt="sold tickets"
              />
              <div>
                <p className="text-white font-semibold text-3xl flex items-center justify-center">
                  300
                  <span className="font-roboto font-bold pl-1"> Million +</span>
                </p>
                <small className="text-white text-lg">Routes</small>
              </div>
            </div>
            <div className="flex gap-x-5 items-center justify-center">
              <img
                className="w-[90px] h-[90px]"
                src={happyClint}
                alt="sold tickets"
              />
              <div>
                <p className="text-white font-semibold text-3xl flex items-center justify-center">
                  5
                  <span className="font-roboto font-bold pl-1"> Million +</span>
                </p>
                <small className="text-white text-lg">Happy Users</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
