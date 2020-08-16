import React, {useState} from 'react';

import { 
  MDBContainer, 
  MDBRow, 
  MDBCol,  
  MDBBtn,  
  MDBCard, 
  MDBCardBody, 
  MDBCardText,
  
} from 'mdbreact';

import styles from './index.module.css';

const CalculatorResult = ({ project, sendData }) => {
  const [amount, setAmount] = useState((project.kWPPerHour*1363) || 0);
  
  const handleChangeInput = (e) => {
    e.preventDefault();
    
    sendData(false)
  }
  
  const handleCreateNewOffer = (e) =>{
    e.preventDefault();
    
    sendData(true)
  }

  const handleGetOffer = (e) =>{
    e.preventDefault();
    
    sendData(true)
  }
  const getAmount =()=>{
    return project.kWPPerHour*1363;
  }
  return (
    <MDBContainer>
      {
        project ? (
          <MDBContainer>
            <MDBRow className={styles['top-margin']}>
              <MDBCol>
                <MDBContainer
                  header='Reversed card'
                  className='justify-content-center d-flex'
                >
                  <div className={styles.padding}>
                  <MDBRow>
                    <h1>
                      Result for:
                    </h1>
                  </MDBRow>
                  <MDBRow>
                    <h1>
                      {project.username}
                    </h1>
                  </MDBRow>
                    
                  </div>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
            <MDBRow className={styles['padding-bottom']}>
              <MDBCol>
                <MDBContainer
                  header='Reversed card'
                  className='justify-content-center d-flex'
                >
                  
                  <MDBCard reverse>
                  {/* kWPPerHour, address, invesmentPurpose, installmentPlace, hasSlope, username */}
                    <MDBCardBody cascade>
                    <MDBRow>
                          <MDBCol><MDBCardText>Investments amount:</MDBCardText></MDBCol>
                          <MDBCol><MDBCardText>{amount} $</MDBCardText></MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol><MDBCardText>Investments address:</MDBCardText></MDBCol>
                          <MDBCol><MDBCardText>{project.address}</MDBCardText></MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol><MDBCardText>Investments purpose:</MDBCardText></MDBCol>
                          <MDBCol><MDBCardText>{project.invesmentPurpose}</MDBCardText></MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol><MDBCardText>Installment place:</MDBCardText></MDBCol>
                          <MDBCol><MDBCardText>{project.installmentPlace}</MDBCardText></MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol><MDBCardText>Installment place has slope:</MDBCardText></MDBCol>
                          <MDBCol><MDBCardText>{project.hasSlope}</MDBCardText></MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol><MDBCardText>Installment max kWp per hour:</MDBCardText></MDBCol>
                          <MDBCol><MDBCardText>{project.kWPPerHour}</MDBCardText></MDBCol>
                      </MDBRow>
                      
                      <MDBRow>
                        <MDBBtn onClick={handleChangeInput} className="white-text" color="primary">Back</MDBBtn>
                        
                        <MDBBtn onClick={handleCreateNewOffer} className="white-text" color="primary">Add new data</MDBBtn>

                        <MDBBtn onClick={handleGetOffer} className="white-text" color="primary">Get New Offer</MDBBtn>
                      </MDBRow>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (null)
      }
    </MDBContainer>
  )
}

export default CalculatorResult;