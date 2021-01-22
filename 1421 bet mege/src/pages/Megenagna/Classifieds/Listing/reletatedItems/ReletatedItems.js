 
  import React from "react";
  import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";
  import Carousel from "react-multi-carousel"; 
  import "react-multi-carousel/lib/styles.css";
  
  import firebase from "../../../../../firebase";
  import "./ReletatedItems.css"
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



  const ReletatedItems = (props) => {
  
    const [Teams, setTeams] = React.useState({teamsList:[]});
    const [albumPhotos, setalbumPhotos] = React.useState({teamsList:[]});
    
  
    
//   const [ShopList, setShopList] = React.useState({ShopList:[]});
  const [electronics, setElectronics] = React.useState([]);
  
    const [ShopList, setShopList] = React.useState([]);
    
    React.useEffect(() => {
    console.log("related props.itemType");
    console.log(props.itemType.categoryName); 
      
          // categoryId: "1"
          // categoryName: "Electronics"
          // typeId: "1"
          // typeName: "Mobile"
          let Electronics=JSON.parse(localStorage.getItem("Electronics"));
          setElectronics(Electronics.electronics);
      

    // const fetchData = async () => {
    //   const db = firebase.firestore();
      
    //   const data = await db.collection("Products").doc('Electronics');
    //   data.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log(" Document data:", doc.data()); 
    //         if (doc.data().products) {
    //         setElectronics(doc.data().products);
    //         }
    //     } else {
    //         console.log("No such  document StudentList!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });
    
    // // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    // };
    // fetchData();
  }, []);
    
  
   
  
return (
    <>
    <h2 className="h1-responsive font-weight-bold my-5 text-center">
         Related {props.itemType.categoryName} Items
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
    {electronics.map((electronic,index)=>
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
          {electronic.title&&<p className=" blue-text">{electronic.title}</p>} 
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
  


  export default ReletatedItems;