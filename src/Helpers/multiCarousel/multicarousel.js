import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div style={{position:"absolute",display:"flex", justifyContents:"space-between"}} className="carousel-button-group">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <button onClick={() => next()} />
        {/* <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
      </div>
    );
  };
export default class Multicarousel extends Component {
 
  render() {
 const   responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
      <div className='my-own-custom-container' style={{position:"relative"}}>

      <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
    // arrows={false}
  >
    <div style={{backgroundColor:"red",height:"100px"}}>Item 1</div>
    <div style={{backgroundColor:"green",minHeight:"100px"}}>Item 2</div>
    <div style={{backgroundColor:"blue",minHeight:"100px"}}>Item 3</div>
    <div style={{backgroundColor:"yellow",minHeight:"100px"}}>Item 4</div>
  </Carousel>
      </div>
    )
  }
}

  