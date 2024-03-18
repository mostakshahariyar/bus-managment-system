import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import banner from "../../assets/bus-travel.jpg";
import banner1 from "../../assets/bus-travel1.jpg";
import banner2 from "../../assets/bus-travel2.jpg";
import banner3 from "../../assets/bus-travel3.jpg";
import banner4 from "../../assets/bus-travel4.jpg";
import banner5 from "../../assets/bus-travel5.jpg";


function Bus() {
  return (
    <div className="mt-20 w-full bg-[#eaf9e7]">
      <Carousel
        className="md:mx-28 mx-[5%] pt-8 relative z-0 flex flex-col justify-center pb-5 items-center"
        autoPlay="1000"
        emulateTouch={true}
        infiniteLoop={true}
        centerSlidePercentage={true}
        dynamicHeight={true}
        preventMovementUntilSwipeScrollTolerance={true}
        autoFocus={true}
        useKeyboardArrows={true}
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
          <img src={banner2} />
          <p className="legend">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            iste corporis iusto quam similique fugit excepturi! Mollitia
            asperiores laudantium recusandae a, error perspiciatis, vitae
            ducimus illo reprehenderit repellendus iusto quam?
          </p>
        </div>
        <div>
          <img src={banner3} />
          <p className="legend">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            iste corporis iusto quam similique fugit excepturi! Mollitia
            asperiores laudantium recusandae a, error perspiciatis, vitae
            ducimus illo reprehenderit repellendus iusto quam?
          </p>
        </div>
        <div>
          <img src={banner4} />
          <p className="legend">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            iste corporis iusto quam similique fugit excepturi! Mollitia
            asperiores laudantium recusandae a, error perspiciatis, vitae
            ducimus illo reprehenderit repellendus iusto quam?
          </p>
        </div>
        <div>
          <img src={banner5} />
          <p className="legend">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            iste corporis iusto quam similique fugit excepturi! Mollitia
            asperiores laudantium recusandae a, error perspiciatis, vitae
            ducimus illo reprehenderit repellendus iusto quam?
          </p>
        </div>
      </Carousel>
      {/* tickets buy section */}
      <div>
        <p className="text-center text-5xl font-semibold font-madimi">
          Search your favourite Bus
        </p>
        <div className=" flex items-center justify-center">
          <form className="my-20 w-full flex flex-col gap-5 items-center justify-center">
            <div className="flex sm:flex-row flex-col w-full sm:w-3/4 lg:w-2/4 items-center justify-center gap-5">
              <div className="flex flex-col items-start gap-y-1 justify-center w-3/4 sm:w-1/2">
                <label htmlFor="from" className="text-xl font-roboto font-semibold">
                  From
                </label>
                <input
                  type="text"
                  name="from"
                  id="from"
                  placeholder="Enter your current city"
                  className="w-full pl-5 px-3 py-2 border border-[#3fc495af] placeholder:text-[#3fc496]"
                />
              </div>
              <FaArrowRightArrowLeft className="mt-0 sm:mt-5 cursor-pointer sm:display hidden" />
              <div className="flex flex-col items-start gap-y-1 justify-center w-3/4 sm:w-1/2">
                <label htmlFor="to" className="text-xl font-roboto font-semibold">To</label>
                <input
                  type="text"
                  name="to"
                  id="to"
                  placeholder="Enter your destination city"
                  className="w-full pl-5 px-3 py-2 border border-[#3fc495af] placeholder:text-[#3fc496]"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col lg:w-2/4 w-full sm:w-3/4 items-center justify-center gap-5">
              <div className="flex flex-col items-start gap-y-1 justify-center w-3/4 sm:w-1/2">
                <label htmlFor="dateOfJourney" className="text-xl font-roboto font-semibold">Date of Journey</label>
                <input
                  type="date"
                  name="dateOfJourney"
                  id="dateOfJourney"
                  placeholder="Pick a date"
                  className="w-full pl-5 px-3 py-2 border border-[#3fc495af] text-[#3fc496]"
                />
              </div>
              <div className="flex flex-col items-start gap-y-1 justify-center w-3/4 sm:w-1/2">
                <label htmlFor="dateOfReturn" className="text-xl font-roboto font-semibold">Date of return</label>
                <input
                  type="date"
                  name="dateOfReturn"
                  placeholder="Pick a date"
                  id="dateOfReturn"
                  className="w-full pl-5 px-3 py-2 border border-[#3fc495af] text-[#3fc496]"
                />
              </div>
            </div>
            <div className="w-2/4 flex items-center justify-center bg-[#3fc49a] cursor-pointer hover:bg-[#3fc495f2] pl-5 px-3 py-2 border-none transition-all ease-in">
              <input className="text-white text-xl font-semibold transition-all ease-in-out cursor-pointer" type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bus;
