import React from 'react';
import PageLayout from '../pages/layout'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBNavLink
} from 'mdbreact';

function Home() {
  return (
    <PageLayout>
      <div className="mt-5">
        <MDBContainer>
          <MDBRow center middle>
            <MDBCol middle className="half-page column animated fadeInLeft">
              <h2 className="blue-text">Welcome to PV App</h2>

              <p style={{padding:5}}>Solar photovoltaic systems, commonly referred to as solar PV systems, 
              convert sunlight directly into electricity. This is different to the solar thermal 
              collectors for solar water heaters. A solar PV system can help reduce carbon emissions and 
              your electricity bill by producing sustainable electricity from the sun instead of burning 
              fossil fuels. Apricus offers a range of solar PV products to help you harness the power 
              of the sun for commercial, industrial and residential electricity applications of all sizes.</p>

              <MDBRow className="no-gutters">
                <MDBCol size="auto">
                  <MDBNavLink to="/projects" style={{padding:0}}>
                    <MDBBtn className="white-text" color="primary">See more</MDBBtn>
                  </MDBNavLink> 
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol middle className="image animated fadeInDown">
              <img
                width="500"
                src="https://static1.squarespace.com/static/5354537ce4b0e65f5c20d562/t/5b7a97596d2a7356c609775f/1534760802545/Solar+Panel+assembly+construction.png?format=1500w"
                alt="welcome"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </PageLayout>
  )
}

export default Home;