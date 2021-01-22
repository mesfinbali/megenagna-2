
import React from 'react';
import { MDBBtn,MDBNavbar,MDBModalHeader,MDBNavbarNav,MDBBreadcrumbItem,MDBBreadcrumb,MDBFormInline, MDBNav,MDBNavItem,MDBNavLink,MDBIcon,MDBTabContent,MDBTabPane,MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBContainer } from 'mdbreact';
import "./ElectronicsHome.css"
import  Listings from './Listing/listings';
import  Shops from './Shops/Shops'; 
import queryString from "query-string";

const ElectronicsHome = (props) => {
  let location=props.location;
console.log("location");
console.log(location);

  const [search, setSearch] = React.useState(queryString.parse(location.search));
  const [activeItemOuterTabs, setactiveItemOuterTabs] = React.useState( "2" );
  const [activeItemInnerPills, setactiveItemInnerPills] = React.useState( "2" ); 
 
  
   
  const toggleOuterTabs = tab => e => {
    if ( activeItemOuterTabs !== tab) {
      setactiveItemOuterTabs(tab);
    }
  };

  const toggleInnerPills = tab => e => {
    if ( activeItemInnerPills !== tab) {
      setactiveItemInnerPills(tab);
    }
  };

  
  return (<>
           

          <MDBContainer>
      <MDBNavbar
        color="indigo"
        style={{ marginTop: "20px" }}
        dark
      >
        {/* <span className="navbar-toggler-icon" /> */}
        <MDBNavbarNav left>
          <MDBBreadcrumb bold  color="indigo">
            <MDBBreadcrumbItem> <a href="/" className="text-white">Home</a> </MDBBreadcrumbItem>
            <MDBBreadcrumbItem> <a href="/" className="text-white">{search.catagory}</a> </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>  {search.type} </MDBBreadcrumbItem>
          </MDBBreadcrumb> 
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
   
   
      <MDBNav id="tabnavFilter" tabs className="  pb-2 pt-2  tabnav pl-2 "  
            //  color="success-color-dark text-center"
             
        color="indigo">
            <MDBNavItem >
              {/* <span className="navItem p-2" link to="#" active={ activeItemOuterTabs === "1"} role="tab" > */}
              <MDBBtn outline color="white"   className=" navItem p-2" onClick={toggleOuterTabs("1")}
              // onClick={ ()=>{ setmodal( !Filtermodal)}}

              >
                <MDBIcon icon="images" /> Shops  </MDBBtn>
              {/* </span>    */}
            </MDBNavItem>
            <MDBNavItem >
              {/* <span className="navItem p-2" link to="#" active={ activeItemOuterTabs === "2"} role="tab" > */}
               <MDBBtn outline color="white"   className= " navItem p-2" onClick={ toggleOuterTabs("2")}
              // onClick={ ()=>{ setmodal( !Filtermodal)}

              >
                 <MDBIcon icon="video" /> Product Listings
              </MDBBtn>
              {/* </span> */}
            </MDBNavItem> 
          </MDBNav>
    </MDBContainer>

          <MDBTabContent
            className="card mb-5"
            activeItem={activeItemOuterTabs}
          >
            <MDBTabPane tabId="1" role="tabpanel">
            < Shops  catagory={search.catagory} type={search.type}></ Shops>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              
             < Listings catagory={search.catagory} type={search.type}></ Listings>
            </MDBTabPane>
          </MDBTabContent>
    

 
   </> );
};

export default ElectronicsHome;