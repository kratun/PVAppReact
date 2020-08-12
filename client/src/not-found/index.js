import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNavLink, MDBBtn } from 'mdbreact';

import './index.module.css'

const NotFound = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6 mx-auto">
          <div className="notfound">
            <div className="not-found h2-responsive font-weight-bold text-center orange-text">
              
              <h2 className="h2-responsive font-weight-bold text-center">Oops! Page Not Be Found</h2>
              <p className="text-center w-responsive mx-auto my-2">Sorry but the page you are looking for does not exist.</p>
              <MDBNavLink to="/">
                <MDBBtn className="white-text">Back to Homepage</MDBBtn>
              </MDBNavLink>
            </div>
          </div>  
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NotFound;