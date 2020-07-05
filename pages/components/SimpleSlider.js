import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import ReactStars from 'react-stars';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      className: "center",
      centerMode: true,
      centerPadding: "5px",
      slidesToShow: 3,
      speed: 500
    };
    return (

      <styles.SimpleSlider className="page">
        <Slider {...settings}>
          <div className="carrouselItem">

            <img src="https://kottke.org/plus/misc/images/ai-faces-01.jpg" alt="" />
            <div className="content">
              <h3>George William</h3>
              <ReactStars
                count={5}
                value={2}
                size={24}
                color1={'rgba(76, 175, 80, 0.3'}
                color2={'#FFB951'}
                edit={false} />
              <p>asdkjasdkjabsdkljabsdklbjasdasd</p>
            </div>
          </div>
          <div className="carrouselItem">

            <img src="https://www.byrdie.com/thmb/3_fR_eGcJT8hpHlGUQIAApcS2qY=/735x0/Jennifer-Lopez-diamond-shaped-face-6cce6efdb4dd4e22b30227c44761a11d.jpg" alt="" />
            <div className="content">
              <h3>Alejandra</h3>
              <ReactStars
                count={5}
                value={3}
                size={24}
                color1={'rgba(76, 175, 80, 0.3'}
                color2={'#FFB951'}
                edit={false} />
              <p>asdkjasdkjabsdkljabsdklbjasasdasdasdasddasd</p>
            </div>
          </div>
          <div className="carrouselItem">

            <img src="https://acordesweb.com/img/the-faces-8c5bd2efbf681ee07941973dfb55d256.jpg" alt="" />
            <div className="content">
              <h3>William SmithS</h3>
              <ReactStars
                count={5}
                value={1}
                size={24}
                color1={'rgba(76, 175, 80, 0.3'}
                color2={'#FFB951'}
                edit={false} />
              <p>asdahdfjkhsdfklsbdflkjsblfkjbsdfljknlsjnflsdnflsdjnsd</p>
            </div>
          </div>
          <div className="carrouselItem">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd_RMDoxtvsG4gi7aRnF_SsIhhyqnmcO4OXA&usqp=CAU" alt="" />
            <div className="content">
              <h3>George Stuart</h3>
              <ReactStars
                count={5}
                value={5}
                size={24}
                color1={'rgba(76, 175, 80, 0.3'}
                color2={'#FFB951'}
                edit={false} />
              <p>asdasdasd</p>
            </div>
          </div>

        </Slider>
      </styles.SimpleSlider>
    );
  }
}

const styles = {};

styles.SimpleSlider = styled.div`

  max-width: 1240px;
  margin: 0 auto;

  .carrouselItem {
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    img{
      width: 200px;
    }
    .content{
      display: none;
    }
  }

  h3 {
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 0px;
    position: relative;
    text-align: center;
  }
  .variable-width .slick-slide p {
    background: #00558B;
    height: 100px;
    color: #fff;
    margin: 5px;
    line-height: 100px;
    text-align: center;
  }
  .center .slick-center h3 {
    color: #1A0F4E;
    opacity: 1;
    transform: scale(1.08);
  }
  .center .slick-center .content {
    display: block;
  }
  .center h3{
    opacity: 0.8;
    transition: all 300ms ease;
  }
  .content {
    padding: 20px;
    margin: auto;
  }
  @media (min-width: 701px) {
    .content {
      width: 80%;
    }
  }
  @media (max-width: 700px) {
    .content {
      width: 70%;
    }
  }
  .slick-slide .image {
    padding: 10px;
  }
  .slick-slide img {
    border: 5px solid #FFF;
    display: block;
    margin: auto;
    max-width: 80%;
  }
  .slick-slide img.slick-loading {
    border: 0
  }
  .slick-slider {
    margin: 30px auto 50px;
  }
  .slick-dots {
    margin-left: 0;
  }
  .slick-thumb {
    bottom: -45px;
  }
  .slick-thumb li {
    width: 60px;
    height: 45px;
  }
  .slick-thumb li img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }
  .slick-thumb li.slick-active img{
      filter: grayscale(0%);
  }
  @media (max-width: 768px) {
    h3 {
      font-size:24px;
    }
    .center {
      margin-left: -40px;
      margin-right: -40px;
    }
    .center .slick-center h3 {
      color: #e67e22;
      opacity: 1;
      transform: scale(1);
    }
    .center h3 {
      opacity: 0.8;
      transform: scale(0.95);
      transition: all 300ms ease;
    }
  }
  .slick-vertical .slick-slide {
    height: 180px;
  }
  .slick-arrow {
    background-color: grey;
    border: solid red 2px;
    padding: 20px;
  }
  .slick-arrow:hover {
    background-color: grey;
  }
  .slick-arrow:focus {
    background-color: grey;
  }
  .button {
    background-color: #00558B;
    padding: 10px 20px;
    margin: 0px 20px;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    min-height: 45px
  }
  
`;