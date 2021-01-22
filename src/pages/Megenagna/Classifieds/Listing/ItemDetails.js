import React from "react";
import {  MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer } from "mdbreact";
import firebase from "../../../../firebase";
// import "./shopeDetails.css" 

import GallaryImages from "../../../Gallary/galaryImages";
import ReletatedItems from "./reletatedItems/ReletatedItems";
const  ItemDetails = () => { 
    let item=JSON.parse(localStorage.getItem("ItemDetails"));
    let gallary=[]
    for(let i=0;i<item.productGalary.length;i++){
gallary.push({
  
  original:item.productGalary[i], 
  thumbnail: item.productGalary[i], 
//   originalAlt:"",// image alt
// thumbnailAlt: "", //thumbnail image alt
  // src: item.productGalary[i], 
  // thumbnail: item.productGalary[i],
  // thumbnailWidth:  320,
  // thumbnailHeight:  174,
//           isSelected: true,
  // caption: attachement.data[i].description,
});
    }
    const [itemGalary, gall] = React.useState(gallary);
    const [ShopList, setShopList] = React.useState({ShopList:[]});
    const [itemDetails, setItemDetails] = React.useState(item)
    const [electronics, setElectronics] = React.useState([]);
    React.useEffect(() => {
      // console.log("itemDetails");
      // console.log(itemDetails);
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
 
        <MDBContainer> 
             
<section className='text-center '>
           <h2 className="h1-responsive font-weight-bold my-5 text-center">
              {itemDetails.title}
            </h2> 
            </section> 

<MDBRow> 
          <MDBCol lg="8" md="12" className="mb-lg-0 mb-4">
            
          <MDBCard pricing className="mb-lg-0 mb-4">
            {/* <div className="price header white-text deep-purple rounded-top"> 
              <MDBView hover rounded className="z-depth-1-half "> 
                         <img
                 className="img-fluid"
                 src={itemDetails.productGalary[0]} 
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
                        <a href="#!">
                          <MDBMask overlay="white-slight" className="waves-light" />
                        </a>
                      </MDBView>
              <div className="version">
                <h5 className="mb-0"> {itemDetails.title}</h5>
              </div>
            </div> */}
            <MDBCardBody className="striped  green-striped  mb-1">
             
       <GallaryImages post={itemGalary}></GallaryImages> 
             </MDBCardBody>
          </MDBCard>
  
        
          <MDBCard pricing className="mb-lg-0 mb-4 mt-4">
             <MDBCardBody className="striped  green-striped  text-left  mb-1">
              <ul>
                
              <li>
                  <p className=" font-weight-bold   pr-2" > 
                   Detail Information:
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon    icon="chevron-right" className="grey-text pr-2" />
                   Item Name: {" "} <span className="red-text  font-weight-bold   ">  {itemDetails.title} </span>
                  </p>
                </li>
                <li>
                  <p >
                    <MDBIcon    icon="money-bill-alt" className="grey-text pr-2" />
                   Price: {" "}<span className="red-text  font-weight-bold   "> {itemDetails.price}{"  "}{itemDetails.currency}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon    icon="clock" className="grey-text pr-2" />
                   Date: {" "} {itemDetails.dateInTime}
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon    icon="map-marker-alt" className="grey-text pr-2" />
                   Location:<span className="grey-text  font-weight-bold   "> {" "}
                    {itemDetails.locationRegion}/{itemDetails.locationTown}
                    </span>
                  </p>
                </li>
                <li>
                  <p className="mt-2"  className=" font-weight-bold  pr-2" > 
                     Item Description:
                  </p>
                </li>
                <li>
                  <p>
                    {/* <MDBIcon icon="check" className="green-text pr-2" />5 Email */}
                    
              <p className="grey-text"> 
              {itemDetails.description}
              </p>
                  </p>
                </li> 
                
              </ul>
            </MDBCardBody>
          </MDBCard>
    


          </MDBCol> 
     
     
     
     
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text deep-purple rounded-top"> 
              <MDBView hover rounded className="z-depth-1-half "> 
                         <img
                 className="img-fluid"
                 src={itemDetails.contactDetails.bannerImageLink}
                        className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
                        <a href="#!">
                          <MDBMask overlay="white-slight" className="waves-light" />
                        </a>
                      </MDBView>
              <div className="version">
                <h5 className="mb-0">
                {itemDetails.contactDetails.shopeName}
                  
                </h5>
              </div>
            </div>
            <MDBCardBody className="striped  green-striped  mb-1">
              <ul>
              <li>
                  <p className=" font-weight-bold  green-text pr-2" > 
                   Phone Contacts:
                  </p>
                </li>
                {itemDetails.contactDetails.contacts.map((contact )=>
                <li>
                <p className=" font-weight-bold ">
                  <MDBIcon    icon="phone" className="green-text pr-2" />
                  {contact}
                </p>
              </li>
              
                )}
                
                <li>
                  <p className="mt-2"  className=" font-weight-bold  green-text pr-2" > 
                      Shope Name:
                  </p>
                </li>
                <li>
                  <p className="mt-2"  className=" font-weight-bold    pr-2" > 
                    {itemDetails.contactDetails.shopeName}
                  </p>
                </li>
                {/* <li>
                  <p>
                     
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
                  </p>
                </li> */}
                <li>
                  <p className=" font-weight-bold  green-text pr-2" > 
                    Social media Contacts:
                  </p>
                </li>
                <li className="mb-4">
                     
<a href={itemDetails.contactDetails.telegramLink} className="p-2 fa-lg tw-ic m-2">
                <MDBIcon   fab icon="telegram" /> 
                  <span className="      pr-2" > Telegram Account</span>
              </a>
             </li>
             
                
                <li className="mb-4">

                <a href={itemDetails.contactDetails.facebookLink} className="p-2 fa-lg fb-ic m-2">
                <MDBIcon    fab icon="facebook-f" /> 
                
                <span className="       pr-2" > Facebook Account</span>
              </a>
                              </li>
                <li> 
                </li>
              </ul>
              <MDBBtn outline color="deep-purple ">View More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
  
  
      </MDBRow>
     
     
     
      </MDBContainer> 
      <ReletatedItems itemType={itemDetails.productType}></ReletatedItems>
    </>);
  }
  
  export default ItemDetails; 