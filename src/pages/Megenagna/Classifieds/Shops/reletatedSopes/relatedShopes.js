
  import React from "react";
  import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";
  import Carousel from "react-multi-carousel"; 
  import "react-multi-carousel/lib/styles.css";
  
  import firebase from "../../../../../firebase";
  import "./relatedShopes.css"
// 210052870516227
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const RelatedShopes = () => {
  
    const [Teams, setTeams] = React.useState({teamsList:[]});
    const [albumPhotos, setalbumPhotos] = React.useState({teamsList:[]});
    
  
    const [ShopList, setShopList] = React.useState([]);
    React.useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
     
  
  //  const data2 = await  db.collection("Users").doc("Users").update({
  //         // users:   firebase.firestore.FieldValue.arrayUnion(users)
  //         users:users
  //     })
  //     .then(function( data) {
  //         // console.log("Document successfully written!" ); 
  //     })
  //     .catch(function(error) {
  //         // console.error("Error writing document: ", error);
  //     });  
  
  
  
  let elct=[];
  
        const data = await db.collection("Users").doc('Users');
        data.get().then(function(doc) {
          if (doc.exists) {
              console.log("Users shop Document data:", doc.data());
              for(let i=0;i<doc.data().users.length;i++){
                if(doc.data().users[i].shopes){
              for(let l=0;l<doc.data().users[i].shopes.length;l++){
                if(doc.data().users[i].shopes[l].shopeType.shopeTypeId=="1"){
                  elct.push(doc.data().users[i].shopes[l]);
                }
                }
                }
  
              }
              setShopList(elct);
  
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
  
    
  
   
  
return (
    <>
    <h2 className="h1-responsive font-weight-bold my-5 text-center">
         Related Shopes
          </h2>
    <MDBCard className="my-5  pb-5 text-center">
    <MDBContainer>
      
        <MDBCardBody  className="px-2 ">
          <h2 className="h1-responsive font-weight-bold my-3">

          {Teams.title}
                    </h2>
          <p className="grey-text w-responsive mx-auto mb-2">

         {Teams.description}
          </p>
  
        </MDBCardBody>
        <MDBContainer>
          
        <Carousel infinite="true" autoPlay="true" responsive={responsive} className="my-2 pb-2 text-center">
    {ShopList.map((Shop,index)=>
    <div  className="m-2 ">
    <MDBCard testimonial  className="p-2 rounded "> 
      <img
      src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/124119443_3651944668223470_3943504378112935066_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=GnmWX_pHTu8AX8niDD4&_nc_ht=scontent.fadd1-1.fna&oh=d2e4fcf1be478962304eb43c7a4bec51&oe=600BBF27"
      // style
              className="  z-depth-1 img-fluid"
                  alt="Sample avatar"
              /> 
              
            <MDBCardBody  className="mt-0 mb-0 p-0">
            
            {/* <h5 className="font-weight-bold mt-2 mb-2">{Shop.about.shopeName}</h5> */}
          {Shop.about.shopeName&&<p className=" blue-text">{Shop.about.shopeName}</p>} 
   {/* {(team.roles.length<2) && <p className="text-uppercase blue-text">--</p>}  */}
            </MDBCardBody>
          </MDBCard>
    </div>
    
    )}
    </Carousel>
 
  
        
        </MDBContainer>
        </MDBContainer>
      </MDBCard>
  
  
  </>
  
  
    );
  }
  


  export default RelatedShopes;