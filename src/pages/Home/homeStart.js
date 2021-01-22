import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard } from
"mdbreact";
import "./homeStart.css"

const HomeStart = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={6}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView className="viewheader">
            <img
              className="d-block w-100"
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129232642_103012098339015_4918215099290192828_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=DYMvnnVZIrgAX-wceC0&_nc_ht=scontent.fadd1-1.fna&oh=19f0b34e0eb8be7510f58e7ce1721190&oe=5FEE763E"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView> 
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView className="viewheader">
            <img
              className="d-block w-100"
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129353432_103012078339017_3976520243511596796_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=9P6rYHn_HGUAX-6p6dO&_nc_ht=scontent.fadd1-1.fna&oh=75033eca04ec1cdb37292604eeaba837&oe=5FF116ED"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView> 
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView className="viewheader">
            <img
              className="d-block w-100"
              src={"https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129591048_103012091672349_9125285162252621237_o.jpg?_nc_cat=101&ccb=2&_nc_sid=0debeb&_nc_ohc=4_h6YyZBmzEAX_jhvSO&_nc_ht=scontent.fadd1-1.fna&oh=a3f56485acc64adf98c163739004e226&oe=5FF17D3E"}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView> 
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView className="viewheader">
            <img
              className="d-block w-100"
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129242838_103012058339019_4829770972260604389_o.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=Sf7eKfI-jnkAX8MyTEz&_nc_ht=scontent.fadd1-1.fna&oh=7d0b03494532b5dcc46b63e548ef4be9&oe=5FEF8924"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView> 
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView className="viewheader">
            <img
              className="d-block w-100"
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129320196_103012071672351_1364606896228600265_o.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=aMK6iy96ov8AX9gQTyl&_nc_ht=scontent.fadd1-1.fna&oh=5f6f68819f0410f41d0414f4ca06f313&oe=5FF031A7"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView> 
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView className="viewheader">
            <img
              className="d-block w-100"
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129098838_103012068339018_7143263554866781780_o.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=s3K7FudkC8oAX9D7XMr&_nc_ht=scontent.fadd1-1.fna&oh=d5236fa9e0969d91e058205063edda85&oe=5FF15910"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView> 
        </MDBCarouselItem> 
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
 
export default HomeStart;