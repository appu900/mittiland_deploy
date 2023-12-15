import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="">
        <Slider {...settings}>
          <div>
            <img
              src="https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/commercem4/assets/images/gallery00.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/commercem4/assets/images/gallery00.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/commercem4/assets/images/gallery07.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
