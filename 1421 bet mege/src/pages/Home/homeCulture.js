import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge } from "mdbreact";

const HomeCultures = () => {

  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  return (
    <MDBCard
        className="my-5 px-5 "
        style={{ fontWeight: 300, maxWidth: "100%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Culture
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129281758_105325228107702_5860329762134425140_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=g8kXOtPVrxwAX_-c1wg&_nc_ht=scontent.fadd1-1.fna&oh=305cd258f8f0099428eade5ee8515177&oe=5FF195C7"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <a href="/gallary/video/?VId=1">
                    <MDBBadge color="pink">
                      <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                      Music
                    </MDBBadge>
                  </a>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="/gallary/video/?VId=1" className="font-weight-bold">
                  See More
                  </a>
                </MDBCol>
                <a href="#!">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
 
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129248171_105330894773802_3824375858560735316_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=5nkOM6k6nCcAX9qG1K-&_nc_ht=scontent.fadd1-1.fna&oh=53a62d9d69a37ff75afc1629025a5383&oe=5FF09D84"
                  alt=""
                />
                <a href="/gallary/video/?VId=1">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <a href="/gallary/video/?VId=1">
                    <MDBBadge color="deep-orange">
                      <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                      Festivals
                    </MDBBadge>
                  </a>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="/gallary/video/?VId=1" className="font-weight-bold">
                  See More
                  </a>
                </MDBCol>
                <a href="/gallary/video/?VId=1">
                  <MDBIcon icon="angle-double-right" />
                </a>
              </div>
              
              </MDBCol>

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://img.youtube.com/vi/zwCzoO4PE50/maxresdefault.jpg"
                  alt=""
                />
                <a href="/gallary/video/?VId=1">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3">
                <MDBCol size="12">
                  <a href="/gallary/video/?VId=1">
                    <MDBBadge color="success">
                      <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                      Documentaries
                    </MDBBadge>
                  </a>
                </MDBCol>
              </MDBRow>
              <div className="d-flex justify-content-between" style={newsStyle}>
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                  <a href="#!" className="font-weight-bold">
                  See More
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
  );
}

export default HomeCultures;