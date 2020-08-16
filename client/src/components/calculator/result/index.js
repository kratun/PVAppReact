import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import {AddOffer} from '../../../services/offer-service'

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
  const history = useHistory();
  const handleChangeInput = (e) => {
    e.preventDefault();
    
    sendData(false)
  }
  
  const handleCreateNewOffer = (e) =>{
    e.preventDefault();
    
    sendData(true)
  }

  const handleGetOffer = async(e) =>{
    e.preventDefault();
    AddOffer(project)
    const offerSaved = await AddOffer(project);
    if(offerSaved){
      history.push('/projects');
    }
    sendData(true)
  }
  const getAmount =()=>{
    return project.kWPPerHour*1363;
  }
  return (
    <MDBContainer className="mt-12">
      {
        project ? (
          <MDBContainer className={styles['card-padding']}>
            <MDBRow className="mt-12">
              <MDBCol md="8 mx-auto">
                <MDBContainer
                  header='Reversed card'
                  className='justify-content-center d-flex'
                >
                  <div className={styles.padding}>
                  <MDBRow>
                    <h2>
                      Result for:
                    </h2>
                  </MDBRow>
                  <MDBRow>
                    <h3>
                      {project.username}
                    </h3>
                  </MDBRow>
                    
                  </div>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-12">
              <MDBCol md="10 mx-auto">
                <MDBContainer
                  header='Reversed card'
                  className='justify-content-center d-flex'
                >
                  
                  <MDBCard reverse>
                  {/* kWPPerHour, address, invesmentPurpose, installmentPlace, hasSlope, username */}
                    <MDBCardBody cascade>
                    <MDBRow className="mt-12">
                          <MDBCol md="6 mx-auto"><MDBCardText>Investments amount:</MDBCardText></MDBCol>
                          <MDBCol md="6 mx-auto"><MDBCardText>{amount} $</MDBCardText></MDBCol>
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

                        <MDBBtn onClick={handleGetOffer} className="white-text" color="primary">Ask Offer</MDBBtn>
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