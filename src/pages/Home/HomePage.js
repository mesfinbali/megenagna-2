import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  
} from 'mdbreact';
import './HomePage.css';
import { ReactComponent as Logo } from './../../assets/BFlogo.svg';

// import HomePageNew from './HomePageNew';
 import TeamPage from '../aboutus/team';
import HomeStart from '../../pages/Home/homeStart.js';
import CoursesPage from '../filmschool/team';
import WhatWeDoComponent from '../services/whatWeDo';
import ContactForm from '../contact/contactForm';
import CarouselProject from './carouselProject';
import RegisterSchool from '../filmschool/registerSchool';
import EcommercePage from './home-gallary';
import HomeTourism from './homeTourism';
import HomeCultures from './homeCulture';
import BaliAlbasat from './BaliAlbasat';
import BaliComputers from './BaliComputers';
import BaliFurnitures from './BaliFurnitures';



class HomePage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';

    window.scrollTo({ top: 0, behavior: "smooth" });

  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <>
       
       {/* <HomeStart></HomeStart> */}
       <BaliAlbasat></BaliAlbasat>
       <BaliComputers></BaliComputers>
       <BaliFurnitures></BaliFurnitures>
      
     
      </>
    );
  }
}

export default HomePage;
