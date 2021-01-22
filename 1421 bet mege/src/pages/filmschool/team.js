import React from "react";
import {  MDBRow, MDBCol, MDBIcon,MDBContainer } from "mdbreact";
import firebase from "../../firebase";


const CoursesPage = () => {


  const [CoursesList, setCoursesList] = React.useState({coursesList:[]});
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      
      const data = await db.collection("FilmSchool").doc('courses');
      data.get().then(function(doc) {
        if (doc.exists) {
            console.log("courses Document data:", doc.data());
            setCoursesList(doc.data());

        } else {
            console.log("No such  document courses!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    // db.collection("spells").add({ name: newSpellName });
  };


  return (
    <>


<MDBContainer>
<section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          About Gedeo
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        The Gedeo are an ethnic group in southern Ethiopia. The Gedeo Zone in the Southern Nations, Nationalities, and People's Region (SNNPR) is named for this people. They speak the Gedeo language, which is one of the Cushitic languages.
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Facts</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Coffee</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Cuisine</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129311861_105225881450970_967941396291819726_o.png?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=p-4NMIrWEyQAX_lt9I8&_nc_ht=scontent.fadd1-1.fna&oh=94a215dac38d1c3ac0ad88e670c2361c&oe=5FF15261"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">The People</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">History</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Festivals</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  
      </MDBContainer>
  
      </>
      );
}

export default CoursesPage;
