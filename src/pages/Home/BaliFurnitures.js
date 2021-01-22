import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBContainer } from "mdbreact";
import "./BaliFurnitures.css"
const BaliFurnitures = () => {
  return (
      <MDBContainer>
    <section className="text-center my-5">
      <h2 className="h1-responsive   text-center my-5">
         <span className="font-weight-bold">Furnitures</span>  <span className="grey-text "> Shop </span>
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/bedroom.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shirt</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Denim shirt{" "}
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/living-room.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Sweatshirt
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/nursery-furniture-decor.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Grey blouse{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mobilecontent.costco.com/live/resource/img/static-us-tiles/dining-room.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Black jacket
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    </MDBContainer>
     );
}

export default BaliFurnitures;