import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer } from "mdbreact";
import firebase from "../../../../firebase"; 
const  Shops = (props) => {
    

  const [ShopList, setShopList] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      let users=[]
      let user;
        // let shops=[{ElectronicShops}]
      for(let i=0;i<=15;i++){
          user={phone:"0932661078",
              userId:"0932661078"+i,
              about:{lName:"mesfinTest"+i,
                      fName:"baliTest"+i,
                    contacts:["0932661078"],
                    profileImage:"",
                   facebookLink:"https://www.facebook.com/BFamily-Promotion-And-Film-School-100180088170173/",
                   telegramLink:"https://telegram.me/Bfamilymediatrainingcenter",
                  brandLogoLink:"",
                  bannerImageLink:"",
                  whatsUpLink:""
                },
              shopes:[
                { shopeType:{shopeTypeId:"1"},
                  userId:"0932661078"+i,
                  about:{shopeName:"mesfin Electronics"+i,
                          fName:"baliTest"+i,
                        contacts:["0932661078"],
                       facebookLink:"https://www.facebook.com/BFamily-Promotion-And-Film-School-100180088170173/",
                       telegramLink:"https://telegram.me/Bfamilymediatrainingcenter",
                      brandLogoLink:"",
                      bannerImageLink:"",
                      whatsUpLink:""
                    }},
                    
                { shopeType:{shopeTypeId:"2"},
                userId:"0932661078"+i,
                about:{shopeName:"mesfin Clothing"+i,
                      contacts:["0932661078"],
                     facebookLink:"https://www.facebook.com/BFamily-Promotion-And-Film-School-100180088170173/",
                     telegramLink:"https://telegram.me/Bfamilymediatrainingcenter",
                    brandLogoLink:"",
                    bannerImageLink:"",
                    whatsUpLink:""
                  }},
                  { shopeType:{shopeTypeId:"3"},
                    userId:"0932661078"+i,
                    about:{shopeName:"mesfin Furniture"+i,
                          contacts:["0932661078"],
                         facebookLink:"https://www.facebook.com/BFamily-Promotion-And-Film-School-100180088170173/",
                         telegramLink:"https://telegram.me/Bfamilymediatrainingcenter",
                        brandLogoLink:"",
                        bannerImageLink:"",
                        whatsUpLink:""
                      }},
                      { shopeType:{shopeTypeId:"4"},
                        userId:"0932661078"+i,
                        about:{shopeName:"mesfin Car"+i,
                              contacts:["0932661078"],
                             facebookLink:"https://www.facebook.com/BFamily-Promotion-And-Film-School-100180088170173/",
                             telegramLink:"https://telegram.me/Bfamilymediatrainingcenter",
                            brandLogoLink:"",
                            bannerImageLink:"",
                            whatsUpLink:""
                          }}
              ]

        }
users.push(user);

      }
      for(let i=0;i<=15;i++){

let car={
  productType:{productTypeId:"4"},
    ImagesUrl:"https://firebasestorage.googleapis.com/v0/b/magenagna.appspot.com/o/Furnitures%2F0932661078%2FPIhKqilN19fuDKC71t0B%2F18033_1574154879929?alt=media&token=9084b927-08b4-4507-9012-81484550bd5a",
 productGalary:[],
contactDetails:{
  userId:"0932661078",
  shopeName:"mesfin mobile sura",
contacts:["0932661078"],
facebookLink:"https://www.facebook.com/BFamily-Promotion-And-Film-School-100180088170173/",
telegramLink:"https://telegram.me/Bfamilymediatrainingcenter",
brandLogoLink:"",
bannerImageLink:"",
whatsUpLink:""
},
dateIn:"11/19/2019 GC 12:14:38",
dateInTime:1574154878902,
description:
"sura mobile "+i,
// furnitureType:
// " ",
id:
"PIhKqilN19fuDKC71t0B",
locationRegion:
"addis",
locationTown:
"addis",
price:
5620,
title:
" car" +i,
}
// users.push(car);

}

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

  

 
  

    const [Listings, setListings] = React.useState( ["","","","","","","","",] );
  return (
      <MDBContainer>
    <section className='text-center my-5'>
         <h2 className="h1-responsive font-weight-bold my-5 text-center">
        {props.catagory} Shopes
          </h2>
          {/* <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>   */} 
          <MDBRow>
          {ShopList.map((Shope) =>
          <MDBCol md="4" sm="6" lg="6" xlg="6" className="mb-4">
               <MDBCard  className="p-2"
      >
        <MDBCardBody  className="p-0">
                <MDBRow>
                  <MDBCol md="8">
                    <MDBView hover rounded className="z-depth-1-half ">
                      <img
                        className="img-fluid"
                        src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/124119443_3651944668223470_3943504378112935066_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=GnmWX_pHTu8AX8niDD4&_nc_ht=scontent.fadd1-1.fna&oh=d2e4fcf1be478962304eb43c7a4bec51&oe=600BBF27"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  {Shope.about &&
                  <MDBCol md="4">
                    <p className="font-weight-bold text-truncate  dark-grey-text">
                    {Shope.about.shopeName}
                    </p>
                    <p className="font-weight-bold text-truncate dark-grey-text">
                      26 Items
                    </p>
                    <p className="font-weight-bold text-truncate dark-grey-text">
                      Addis abeba
                    </p>
                      <a href="/shope">
                      View More  <MDBIcon icon="angle-double-right" />
                      </a>
                    {/* <div className="d-flex justify-content-between p-2">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis
                        </a>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                      </MDBCol>
                    </div> */}
                  </MDBCol>}
                </MDBRow>
        </MDBCardBody>
        </MDBCard>
            
 
              </MDBCol>
   
          )}
          </MDBRow>
  
    </section>
    </MDBContainer> 
    );
}

export default  Shops;