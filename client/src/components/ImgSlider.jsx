import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImgSlider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="arrow_left s"
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="arrow_right s"
            onClick={onClick}
          />
        );
      }


    const settings = {
      infinite: true,
      slidesToShow: 2,
      rows: 2,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      nextArrow: < SamplePrevArrow/>,
      prevArrow: < SampleNextArrow/>
    };

    return (
      <div className="webtoon_slider" >
        <div className="slider_h1" > 최강자전 <span  style={{ color:"#1ed874" }} > 웹툰 </span> 모아보기 </div>
        <Slider {...settings}>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>

        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" />
          <div className="sider_title" >title1</div>
        </div>


        </Slider>
      </div>
    );
  
}

export default ImgSlider;