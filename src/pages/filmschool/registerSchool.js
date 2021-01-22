 
  import React from 'react';
  import { BrowserRouter as Router } from 'react-router-dom';
  import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,MDBModal,MDBModalBody,MDBModalHeader,
    MDBView,
    MDBContainer,
    MDBIcon
  } from 'mdbreact';
  import './registerSchool.css';
import RegisterForm from './registerForm';
import ContactForm from '../contact/contactForm';
  
  class RegisterSchool extends React.Component {
    state = {
      collapsed: false ,
      modal: false,
      modalSelected:1
    };
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }
    handleTogglerClick = () => {
      const { collapsed } = this.state;
      this.setState({
        collapsed: !collapsed
      });
    };
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    render() {
   
      return (
        <div id='caltoaction'>
          <MDBView className="mdbparallaxHeader "  fixed src='https://mdbootstrap.com/img/Photos/Others/gradient2.png'>
            <MDBMask className='rgba-purple-slight ' />
            <MDBContainer
              style={{ height: '100%', width: '100%', paddingTop: '6rem' }}
              className='d-flex justify-content-center align-items-center'
            >
              <MDBRow>
                <MDBCol md='12' className='mb-4 text-center'>
                    
                  <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                  FILM SCHOOL
                  </h1>
                  <h3 className=' font-weight-bold mb-0 pt-md-5 pt-5'>
                    Our New Course is Ready
                  </h3>
                  <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                    It comes with a lot of new features, easy to follow videos and
                    images. Check it out now!
                  </h5>
                  <MDBBtn rounded className='btn-purple'  onClick={ ()=>{ this.setState({modalSelected:1, modal: !this.state.modal})}}>
                    <MDBIcon icon='user' className='mr-2' /> Register
                  </MDBBtn>
                  <MDBBtn rounded outline color='purple'  onClick={ ()=>{ this.setState({modalSelected:2, modal: !this.state.modal})}} >
                    <MDBIcon icon='book' className='mr-2' /> Contact Us
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBView>


          <MDBModal isOpen={this.state.modal} toggle={this.toggle}      size="lg"  >
          <MDBModalHeader toggle={this.toggle}>
         {(this.state.modalSelected===1) && <h4> Register to School</h4>} 
         {(this.state.modalSelected===2) && <h4> Contact Us</h4>}
           
            
            </MDBModalHeader>
          {/* <MDBModalBody> */}
         {(this.state.modalSelected===1) &&<RegisterForm></RegisterForm>} 
         {(this.state.modalSelected===2) &&<ContactForm></ContactForm>}
          
           
         {/* </MDBModalBody> */}
        </MDBModal>

        </div>
      );
    }
  }
  
  export default RegisterSchool;