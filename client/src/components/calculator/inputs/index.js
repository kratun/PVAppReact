import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardImage, MDBCard } from 'mdbreact';

import styles from './index.module.css';

const CalculatorInput = (props) => {
  const [projectsData, setProjectsData] = useState({});
  
  useEffect(() => {
   
    const project = props.project
    
    if (project) {
        setProjectsData(project);
    }
    
}, [props]);

  const updateFeildsData = ({ target }) => {
    
    const { name, value } = target;
    const newData = { ...projectsData, [name]: value };

    setProjectsData(newData);
  };

  const trimmedValue = ({target}) =>{
    
    const { name, value } = target;
    const trimmedValue = value.toString().trim();
    const newData = { ...projectsData, [name]: trimmedValue };

    setProjectsData(newData);
  };

  const handleSubmitCalculationInputs = async (e) => {
    e.preventDefault();
    const canProceed = (title && description && imgUrl && amount)
    if(!canProceed){
      return
    }
    
    const payload = {title, description, imgUrl, amount};
    
    props.sendData(payload)
    
  }

  const {
    title,
    description,
    imgUrl,
    amount
  } = projectsData;

  return (
    <MDBContainer className={styles['padding-bottom']}>
      <MDBRow className="mt-8">
        
        <MDBCol md="6 mx-auto">
        <div className="h4 text-center my-4">Add Project Data</div>
        <form onSubmit={handleSubmitCalculationInputs}> 
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor="title" className="grey-text">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title || ''}
                  id="title"
                  className="form-control"
                  onChange={updateFeildsData}
                  onBlur = {trimmedValue}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor="imgUrl" className="grey-text mt-4">
                  Image Url
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  value={imgUrl || ''}
                  className="form-control"
                  onChange={updateFeildsData}
                  onBlur = {trimmedValue}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor="amount" className="grey-text mt-4">
                  Investments Amount
                </label>
                
                  <input
                    type="number"
                    id="amount"
                    name="amount" 
                    precision={2}
                    step={0.01} 
                    min={0} 
                    value={amount || 0} 
                    className='form-control'
                    onChange={updateFeildsData} 
                  />
                
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor="description" className="grey-text mt-4">
                  Description
                </label>
                <textarea 
                  type="text"
                  id="description"
                  name="description"
                  value={description || ''}
                  className="form-control"
                  rows="5"
                  onChange={updateFeildsData}
                  onBlur = {trimmedValue}
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Get Offer</MDBBtn>
            </div>
          </form>
        
        </MDBCol> 

        <MDBCol md="6 mx-auto">
          <p className="h4 text-center my-4">Image Preview</p>
          
            {
              imgUrl?
              (
                <MDBCard cascade narrow ecommerce>
                  <MDBCardImage
                      zoom
                      cascade
                      className='img-fluid'
                      src={imgUrl}
                      alt = "Logo"
                      waves
                    />
                </MDBCard>
              ):(
                null
              )
            }
            
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CalculatorInput;