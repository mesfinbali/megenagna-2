import React from "react";
import {  MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer } from "mdbreact";
import firebase from "../../../firebase";
import "./shopeDetails.css"
import RelatedShopes from "../Classifieds/Shops/reletatedSopes/relatedShopes";
const ShopeDetails = () => { 

    const [ShopList, setShopList] = React.useState({ShopList:[]});
    const [electronics, setElectronics] = React.useState([]);
    React.useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        
        const data = await db.collection("Products").doc('Electronics');
        data.get().then(function(doc) {
          if (doc.exists) {
              console.log("Electronics Document data:", doc.data());
              setElectronics(doc.data().electronics);
  
          } else {
              console.log("No such  document StudentList!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      
      // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);
  
    
  
      const [Listings, setListings] = React.useState( ["","","","","","","","",] );
    return (<>

<MDBView hover rounded className="z-depth-1-half ShopeBanner mt-2 mb-2">
                      <img
                        className="img-fluid"
                        src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/124119443_3651944668223470_3943504378112935066_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=GnmWX_pHTu8AX8niDD4&_nc_ht=scontent.fadd1-1.fna&oh=d2e4fcf1be478962304eb43c7a4bec51&oe=600BBF27"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
        <MDBContainer> 
             
<section className='text-center '>
           <h2 className="h1-responsive font-weight-bold my-5 text-center">
              Mafi Electronics Shope
            </h2> 
            </section> 

<MDBRow>
        <MDBCol lg="8" md="12" className="mb-lg-0 mb-4">
        <section className='text-center '>
           {/* <h2 className="h1-responsive font-weight-bold my-5 text-center">
              Mafi Electronics Shope
            </h2> */}
            {/* <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit id
              laborum.
            </p>   */} 
            <MDBRow>
            {electronics.map((item) =>
            <MDBCol md="6" className="mb-4">
                 <MDBCard  className="p-2"
        >
          <MDBCardBody  className="p-0">
                  <MDBRow>
                    <MDBCol md="7" sm='6' lg="6">
                      <MDBView hover rounded className="z-depth-1-half ">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                          alt=""
                        />
                        
                        <a href="#!">
                          <MDBMask overlay="white-slight" className="waves-light" />
                        </a>
                      </MDBView>
                    </MDBCol>
                    <MDBCol md="5" sm='6' lg="6">
                      <p className="font-weight-bold dark-grey-text">
                        {item.title}
                      </p>
                      <p className="  dark-grey-text">
                        {item.price} Birr
                      </p> 
                      <div className="d-flex justify-content-between p-2">
                        <MDBCol size="11" className="text-truncate pl-0 mb-3">
                          <a href="#!" className="dark-grey-text">
                          {item.description}
                           </a>
                        </MDBCol>
                        <a href="#!">
                          <MDBIcon icon="angle-double-right" />
                        </a>
                      </div>
                    </MDBCol>
                  </MDBRow>
          </MDBCardBody>
          </MDBCard>
              
   
                </MDBCol>
     
            )}
            </MDBRow>
    
      </section>
    
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text deep-purple rounded-top"> 
              <MDBView hover rounded className="z-depth-1-half "> 
                         <img
                 className="img-fluid"
               src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/124119443_3651944668223470_3943504378112935066_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=GnmWX_pHTu8AX8niDD4&_nc_ht=scontent.fadd1-1.fna&oh=d2e4fcf1be478962304eb43c7a4bec51&oe=600BBF27"
                        className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
                        <a href="#!">
                          <MDBMask overlay="white-slight" className="waves-light" />
                        </a>
                      </MDBView>
              <div className="version">
                <h5 className="mb-0">Mafi Electronics Shope</h5>
              </div>
            </div>
            <MDBCardBody className="striped  green-striped  mb-1">
              <ul>
                <li>
                  <p className="mt-2"  className=" font-weight-bold  green-text pr-2" > 
                    About the shope
                  </p>
                </li>
                <li>
                  <p>
                    {/* <MDBIcon icon="check" className="green-text pr-2" />5 Email */}
                    
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
                  </p>
                </li>
                <li>
                  <p className=" font-weight-bold  green-text pr-2" > 
                   Phone Contacts:
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon    icon="phone" className="green-text pr-2" />
                   +251 9 42424293
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon    icon="phone" className="green-text pr-2" />
                    +251 9 60371120 
                  </p>
                </li>
                <li>
                  <p className=" font-weight-bold  green-text pr-2" > 
                    Social media Contacts:
                  </p>
                </li>
                <li>
                 
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon size="lg"  fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon size="lg" fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon size="lg"  fab icon="dribbble" />
              </a>
                </li>
              </ul>
              <MDBBtn outline color="deep-purple ">Full Profile</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
     
     
     
      </MDBContainer> 
      
    <RelatedShopes></RelatedShopes>
    </>);
  }
  
  export default ShopeDetails; 