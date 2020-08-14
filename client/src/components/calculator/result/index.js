import React from 'react';

import { 
  MDBContainer, 
  MDBRow, 
  MDBCol,  
  MDBBtn,  
  MDBCard, 
  MDBCardBody, 
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  
} from 'mdbreact';

import styles from './index.module.css';

const CalculatorResult = ({ project, sendData }) => {
  const handleChangeInput = (e) => {
    e.preventDefault();
    
    sendData(false)
  }
  
  const handleGetNewOffer = (e) =>{
    e.preventDefault();
    
    sendData(true)
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
                      Result
                    </h1>
                  </MDBRow>
                  <MDBRow>
                    <h1>
                      {project.title}
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
                    <MDBCardImage
                      zoom
                      cascade
                      className='img-fluid'
                      src={project.imgUrl}
                      waves
                    />
                    <MDBCardBody cascade>
                      <MDBCardTitle>{project.title}</MDBCardTitle>
                      <MDBCardText>
                      
                          Investments amount: {project.amount} $
                          </MDBCardText>
                          <MDBCardText>
                          {project.description}
                      
                      </MDBCardText>
                      
                        <MDBBtn onClick={handleChangeInput} className="white-text" color="primary">Back</MDBBtn>
                      
                        <MDBBtn onClick={handleGetNewOffer} className="white-text" color="primary">Get New Offer</MDBBtn>
                      
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