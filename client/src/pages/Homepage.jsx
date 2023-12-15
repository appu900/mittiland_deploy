import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "./About";

export default function Homepage() {
  return (
    <section class="text-black body-font  bg-black">
      <Header/>  
      <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-12">
        <div class="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 class="mb-2 text-6xl  font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>We are making </span>
            <br class="hidden lg:block"></br>
            stunning 3d Models
          </h1>
          <br></br>
          <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            mittiland is a organisation who makes 3d models{" "}
           
            and assests
          </p>
        </div>
      </div>
      <div class="container flex flex-col items-center justify-center py-10 mx-auto rounded-lg md:p-1 p-3">
        <img
          class="object-cover object-center   mb-10 h-[500px] w-[500px] dark:border-gray-900 g327  rounded-lg shadow-md"
          alt="hero"
          src="https://cdn.pixabay.com/photo/2021/12/30/14/49/metaverse-6904045_640.png"
        ></img>
      </div>
      <section class="text-gray-600 body-font">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://cdn.pixabay.com/photo/2022/10/04/21/25/pink-7499159_1280.jpg"
            ></img>
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Free/paid
                </h2>
                <p class="leading-relaxed text-lg">
                  All of our templates are good
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Optimised
                </h2>
                <p class="leading-relaxed text-lg">
                  All our templates come with a good build
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  user Friendly
                </h2>
                <p class="leading-relaxed text-lg">
                  
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Fast
                </h2>
                <p class="leading-relaxed text-lg">
                  The fastest websites you can get.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Google Analytics Supported
                </h2>
                <p class="leading-relaxed text-lg">
                  All our templates come with full support for Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  );
}
