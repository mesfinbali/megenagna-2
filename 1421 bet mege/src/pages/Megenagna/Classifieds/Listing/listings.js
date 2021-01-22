import React from "react";
import { MDBBreadcrumb,MDBModal,MDBModalHeader,MDBNavbar,MDBNavItem,MDBNavbarNav,MDBBreadcrumbItem, MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer } from "mdbreact";
 
import firebase from "../../../../firebase";
import RegisterForm from "../../../filmschool/registerForm";
const  Listings = (props) => { 
console.log("props");
console.log(props);
  const [ShopList, setShopList] = React.useState({ShopList:[]});
  const [electronics, setElectronics] = React.useState([]);
 
  const [Filtermodal, setmodal] = React.useState(false);
  React.useEffect(() => {
    
    let Electronics=JSON.parse(localStorage.getItem("Electronics"));
    setElectronics(Electronics.electronics);


    // const fetchData = async () => {
    //   const db = firebase.firestore();
    //   var newData;
    //   const data = await db.collection("Products").doc(props.catagory);
    //   data.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log(" Document data:", doc.data()); 
    //         if (doc.data().products) {
    //           newData=doc.data().products;
    //         setElectronics(doc.data().products);
    //         newDta(db,newData)

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


  const newDta=(db,newData)=>{

// if(newData){
  // console.log("Document database written!" ); 
  // var arry
  // for(let i=0;i<newData.length;i++){
  //   newData[i].productType={categoryId
  //     :"2",
  //     categoryName:
  //     "Vehicle", 
  //     typeId:
  //     "1",
  //     typeName:
  //     "Car"}
  // } 

  //    db.collection("Products").doc(props.catagory).update({
  //       products : newData,
  //   })
  //   .then(function( data) {
  //       // console.log("Document successfully written!" ); 
  //   })
  //   .catch(function(error) {
  //       // console.error("Error writing document: ", error);
  //   });  
  // }


  }


   
  const toggle = () => {
    setmodal( !Filtermodal );
  }
  const itemDetails=(itemdata)=>{
    localStorage.setItem("ItemDetails",JSON.stringify(itemdata))
    window.location.assign("/product")
  }
  

    const [Listings, setListings] = React.useState( ["","","","","","","","",] );
  return (<>
    <MDBContainer>
      <MDBNavbar
         color="indigo lighten-4" 
        style={{ marginTop: "20px" }}
        dark
      >
        <MDBNavbarNav left>

        <MDBBreadcrumb  color="indigo lighten-4"> 
            <MDBBreadcrumbItem appendIcon icon=" ">
              <select className="form-control form-control-sm   "  
                            >
                    <option>All Price</option>
                    <option value="Addis Abeba">Mobile</option>
                    <option value="Adama">Laptop</option>
                    <option value="Arba Minch">Camera</option>
                  </select></MDBBreadcrumbItem>
            <MDBBreadcrumbItem  appendIcon icon=" " >
              <select className="form-control form-control-sm   "  
                            >
                    <option>All Price</option>
                    <option value="Addis Abeba">Mobile</option>
                    <option value="Adama">Laptop</option>
                    <option value="Arba Minch">Camera</option>
                  </select></MDBBreadcrumbItem>
         
          </MDBBreadcrumb>
 
        </MDBNavbarNav> 
        <MDBNavbarNav right> 
             
            <MDBNavItem active >
              {/* <MDBNavLink to="#!"  
              // 
               >
                Filter</MDBNavLink> */}
                
              <MDBBtn outline color="white"  size="sm" className="m-0 "
              onClick={ ()=>{ setmodal( !Filtermodal)}}

              >
              <span className="navbar-toggler-icon" /> {"  "} Filter</MDBBtn>
            </MDBNavItem>  
         
          </MDBNavbarNav>
      </MDBNavbar>
    </MDBContainer>



      <MDBContainer>
    <section className='text-center my-5'>
         <h2 className="h1-responsive font-weight-bold my-5 text-center">
           {props.catagory}
          </h2>
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
                  <MDBCol md="5">
                    <MDBView hover rounded className="z-depth-1-half "  onClick={()=>{itemDetails(item)}}>
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
                  <MDBCol md="7" >
                    <p className="font-weight-bold text-truncate  dark-grey-text">
                      {item.title}
                    </p>
                    <p className="font-weight-bold justify-content-between  dark-grey-text">
                      {item.price } Br{"    "}
                     
              <MDBBtn outline color="deep-purple " size="sm" onClick={()=>{itemDetails(item)}}>
                        <MDBIcon icon="angle-double-right" /> View More</MDBBtn>
                    
                    </p>
                    {/* <div className="d-flex justify-content-between p-2">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        {item.description}
                         </a>
                      </MDBCol>
                      <a onClick={()=>{itemDetails(item)}}>
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div> */}
                  </MDBCol>
                </MDBRow>
        </MDBCardBody>
        </MDBCard>
            
 
              </MDBCol>
   
          )}
          </MDBRow>
  
    </section>
    </MDBContainer> 
  
    <MDBModal isOpen={ Filtermodal} toggle={ toggle}      size="lg" side position="top-right"  >
          <MDBModalHeader toggle={ toggle}>
          <h4> Filter Items</h4> 
           
            
            </MDBModalHeader>
          {/* <MDBModalBody> */} 
          <RegisterForm></RegisterForm> 
          
           
         {/* </MDBModalBody> */}
        </MDBModal>
  
   </> );
}

export default  Listings;