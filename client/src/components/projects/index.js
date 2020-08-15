import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardImage, MDBCard } from 'mdbreact';

import styles from './index.module.css';

const ProjectComponent = (props) => {
  //const [projectsData, setProjectsData] = useState({});
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState(null);
  const [description, setDescription] = useState('');
  const [errorDescription, setErrorDescription] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [errorImgUrl, setErrorImgUrl] = useState(null);
  const [amount, setAmount] = useState(null);
  const [errorAmount, setErrorAmount] = useState(null);

  useEffect(() => {
   
    const project = props.project
    
    if (project) {
      console.log(project,'project')
      if(project.title){setTitle(project.title)}
      if(project.description){setDescription(project.description)}
      if(project.imgUrl){setImgUrl(project.imgUrl)}
      if(project.amount){setAmount(project.amount)}
    }
    
}, [props]);

  const validateTitle = (data)=>{
      
    const trimmedValue = data.trim();
    
    const titleLengthMin = 5
    const titleLengthMax = 20
    
    if((trimmedValue.length < titleLengthMin) || (trimmedValue.length > titleLengthMax)){
      const errMsg = `Title should be between ${titleLengthMin} and ${titleLengthMax} characters!`
      setErrorTitle(errMsg);
    }
    else{
      setErrorTitle(null)
    }
    setTitle(trimmedValue);
  }

  const validateImgUrl = (data)=>{
    const pattrnStr = "http"
    const pattern = new RegExp("^" + pattrnStr);
    const trimmedValue = data.trim();
    const isMatch = pattern.test(trimmedValue)
    if(!isMatch){
      const errMsg = 'Please write correct url, starting with http!'
      setErrorImgUrl(errMsg)
      return
    }
    setErrorImgUrl(null);
    setImgUrl(trimmedValue)
  }

  const validateAmount = (data)=>{
    
    
    if(data<=0){
      const errMsg = 'Please write correct mount!'
      setErrorAmount(errMsg)
      return
    }
    setErrorAmount(null);
    setAmount(data)
  }

  const validateDescription = (data)=>{
    const trimmedValue = data.trim();
    
    const titleLengthMin = 5
    const titleLengthMax = 2000
    
    if((trimmedValue.length < titleLengthMin) || (trimmedValue.length > titleLengthMax)){
      const errMsg = `Description should be between ${titleLengthMin} and ${titleLengthMax} characters!`
      setErrorDescription(errMsg);
    }
    else{
      setErrorDescription(null)
      setDescription(trimmedValue);
    }

    
  }

  const handleSubmitCalculationInputs = async (e) => {
    e.preventDefault();
    const canProceed = (!errorTitle && !errorDescription && !errorImgUrl && !errorAmount)
    if(!canProceed){
      return
    }
    
    const payload = {title, description, imgUrl, amount};
    
    console.log('payload',payload)

    props.sendData(payload)
    
  }

  // const {
  //   title,
  //   description,
  //   imgUrl,
  //   amount
  // } = projectsData;

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
                  onChange={(e)=>{setTitle(e.target.value)}}
                  onBlur = {(e)=> {validateTitle(e.target.value)}}
                  required
                />
                {
                  (errorTitle)? (<div className="text-danger">{errorTitle}</div>):(null)
                }
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
                  onChange={(e)=>{setImgUrl(e.target.value)}}
                  onBlur = {(e)=> {validateImgUrl(e.target.value)}}
                  required
                />
                {
                  (errorImgUrl)? (<div className="text-danger">{errorImgUrl}</div>):(null)
                }

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
                    value={amount||0} 
                    className='form-control'
                    onChange={(e)=>{setAmount(e.target.value)}} 
                    onBlur = {(e)=> {validateAmount(e.target.value)}}
                  />
                {
                  (errorAmount)? (<div className="text-danger">{errorAmount}</div>):(null)
                }
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
                  onChange={(e)=>{setDescription(e.target.value)}}
                  onBlur = {(e)=> {validateDescription(e.target.value)}}
                  required
                ></textarea>
                {
                  (errorDescription)? (<div className="text-danger">{errorDescription}</div>):(null)
                }
                
              </div>
            </div>
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Save</MDBBtn>
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

export default ProjectComponent;