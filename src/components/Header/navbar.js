import React from 'react';
import {
  MDBNavbar,MDBRow,MDBCol,MDBInput,MDBCardBody,MDBCard,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle,
  MDBNavLink,MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBListGroup, MDBListGroupItem,
} from 'mdbreact';
import './header.css';
import Sidebar from "react-sidebar";
import { ReactComponent as Logo } from './../../assets/Know-gedeo.svg';
////
import {
  // BrowserView,
  // MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import './sideNav.css';
import { SidebarData } from '../../Service-ApI/MasterData';

import { slide as Menu } from 'react-burger-menu';
import "./sideBar.css"
import HomeStart from '../../pages/Home/homeStart';

class NavBar extends React.Component {
  state = {
    collapseID: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
}
  
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));


    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
      };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'black' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    return (
      <>
     
    <Menu  isOpen={ this.state.sidebarOpen } onClose={ ()=>this.onSetSidebarOpen(false) }  customBurgerIcon={ false } customCrossIcon={ false } >
   

{/*"menu-item */} 
                
      <MDBListGroup style={{ color: '#fff !important'  }} >
          
          {SidebarData.map((item, index) =><>
              <MDBListGroupItem className='nav-menu-items '>
              <MDBNavItem  className={item.cName} >  
                          {!item.pathUrl && <MDBNavLink className='nav-text p-0'
                              exact
                              to={item.path }
                              onClick={() => this.onSetSidebarOpen(false)}
                             > 

                                {/* {item.icon} */}
                                
                <MDBIcon icon={item.icon} size="sm"   />
                              <strong className="ml-3">{item.title}</strong>
                            </MDBNavLink>}
                          {item.pathUrl && <MDBNavLink className='nav-text p-0'
                              exact
                              to={item.path+"?catagory="+item.pathUrl.catagory+"&type="+item.pathUrl.type}
                              onClick={() => this.onSetSidebarOpen(false)}
                             > 

                                {/* {item.icon} */}
                                
                <MDBIcon icon={item.icon} size="sm"   />
                              <strong className="ml-3">{item.title}</strong>
                            </MDBNavLink>}
                          </MDBNavItem>
                  
              </MDBListGroupItem>

              
          
          </>)}
          
                          
          
          
            </MDBListGroup>
      
    </Menu>

      <div id='classicformpage'>
          <div>

            <MDBNavbar
              dark
              expand='md'
              scrolling
              fixed='top'
             color="darken-4"
            >
              <MDBContainer>
              <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
          {/* {isBrowser&&
           <Logo className="m-0" style={{ height: '6rem', width: '12rem', top:"5" , position:"absolute", }} />
          
          } 
          
          {isMobile&&
           <Logo className="m-0" style={{ height: '3rem', width: '6rem', top:"5" , position:"absolute", }} />
          } */}
          
    

              <strong className='align-middle'>MEGENAGNA SHOPS</strong>
            </MDBNavbarBrand>
                <MDBNavbarToggler
                //   onClick={this.toggleCollapse('mainNavbarCollapse')}
                  onClick={()=>this.onSetSidebarOpen(true)}

                />
                <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>

                {SidebarData.map((item, index) =><> 

    <MDBDropdown>
      <MDBDropdownToggle   color=" ">
        {item.subTitles&&
                    <strong className="text-white">{item.title}'''</strong>
        }
    {!item.subTitles&&
   <> { item.pathUrl&& <strong className="text-white"
                  onClick={()=>{
                  window.location.assign(item.path+"?catagory="+item.pathUrl.catagory+"&type="+item.pathUrl.type);
                }}>{item.title}</strong>}
               { !item.pathUrl&& <strong className="text-white"
                  onClick={()=>{
                  window.location.assign(item.path);
                }}>{item.title}</strong>}  
                </>
        }
        
      </MDBDropdownToggle>
      {item.subTitles&& 
      <MDBDropdownMenu basic>
        {(item.subTitles.map((subtitle)=>
        <MDBDropdownItem>{subtitle.title}</MDBDropdownItem>))
        }
      </MDBDropdownMenu>
      }
    </MDBDropdown>
                
                </>)}

              
              </MDBNavbarNav>
               
                </MDBCollapse>
           
         
              </MDBContainer>
             
              <div > 
            
            <MDBDropdown className="   text-white py-0 font-weight-bold"  group  >
            <img
                             style={{ height: '1.5rem', width: '1.5rem',   }} 
                               src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                               alt=""
                               className="rounded-circle avatar-img ml-1 mr-1 z-depth-1-half"
                             />
                             Mesfin
                  <MDBDropdownToggle  tag="span"  color="primary" className="ml-2"  >
                    
                <MDBIcon size="lg" icon="plus-circle" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu  basic>
                    <MDBDropdownItem disabled  > <span className=" pl-0 font-weight-bold">Create</span></MDBDropdownItem>
                    <MDBDropdownItem href="/manage-product">
                        <MDBIcon size="lg" icon="plus-circle" className="ml-2 mr-2" />
                        Create New Post
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/manage-product">
                      <MDBIcon size="lg" icon="plus-circle" className="ml-2 mr-2" />
                      Create New Shope
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                           </div>
            </MDBNavbar>
 

            <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>


            {collapseID && overlay}
          </div>
      </div>
      
      <HomeStart></HomeStart>
   </> );
  }
}



export default NavBar;
















