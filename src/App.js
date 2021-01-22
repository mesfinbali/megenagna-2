
import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,MDBInput,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,MDBBtn,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/BFlogo.svg';
import Routes from './Routes';
import FooterPage from './components/footer/FooterPage';
import NavBar from "./components/Header/navbar.js"
import firebase from "./firebase";
import * as firebaseui from "firebaseui";



class App extends Component {
  
constructor(props){
  super(props);
  this.state={
    user:true,
  }
}

setUser(user){
  this.setState({user:user});  

}
     componentDidMount(){
      (async () => { 
        
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.    console.log("phoneNumber");
    this.setUser(user);
console.log("user");
console.log(user.phoneNumber);
  } else {
    // No user is signed in.    console.log("phoneNumber");
console.log("no user");
console.log("no user");
  }
});
        

      })();

    // console.log("user2")
    // console.log(user2)
    // const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
 
 
  render() {
    return (
      <div>
        {!(this.state.user) &&
            <>     
          <h1>REACT PHONE AUTHENTICATION</h1>
          <div id="firebaseui-auth-container"></div>
           </> 
            }

{(this.state.user) &&
            <>  
      <Router>
      <div className='flyout'  >
     
    <NavBar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} ></NavBar>
      {/* <SideBarComp pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
    
          {/* <main style={{ marginTop: '4rem' }}> */}
          <main className='' >
            <Routes />
          </main>
          <FooterPage></FooterPage>
          </div>
      </Router>
</>}
      </div>
    );
  }



}

export default App;
