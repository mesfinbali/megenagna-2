import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const HomeTourism = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Tourism
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/130101073_105300791443479_856931716704741526_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=JhSHP-ihLY0AX-AHpQ-&_nc_ht=scontent.fadd1-1.fna&oh=4dca274ef555f45ab967abb621756ceb&oe=5FEF5582"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="Posts/album/?name=Attractions&fbId=101220648066117" className="pink-text">
              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="map" className="pr-2" />
                Attractions
              </h4>
            </a> 
            {/* <p>
              by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              15/07/2018
            </p> */}
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus
              voluptas.
            </p>
            <MDBBtn color="pink" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/121971502_203157111205803_1670659139043016274_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=36vIRDYq32sAX9NTWI0&_nc_oc=AQmU53ubUg6y-mUaxvjVunjXOnzSpmIIJRD8BE9alhjV9k5bQjb5F3urrKEOghcajyg&_nc_ht=scontent.fadd1-1.fna&oh=1f1b2abc6e3d6a0be29c705f08602981&oe=5FF00BD5"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="deep-orange-text">
              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="film" className="pr-2" />
                Events
              </h4>
            </a> 
            
            
            <p className="dark-grey-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis voluptatum deleniti atque corrupti quos dolores.
            </p>
            <MDBBtn color="deep-orange" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129696759_221678612686986_1475163317828297042_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=YsXgvsGFuqsAX9Yhs3t&_nc_ht=scontent.fadd1-1.fna&oh=2b485ae2b450d63f3b114d16546d044d&oe=5FF1C4EE"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="blue-text">
              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="fire" className="pr-2" />
                Places
              </h4>
            </a> 
            
            <p className="dark-grey-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default HomeTourism;