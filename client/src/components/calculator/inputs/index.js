import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import styles from './index.module.css';
import {KWP_ARR, INVESTMENT_PURPOSES, INSTALLMENT_PLACE, YES_NO} from '../../../utils/constants-calculator'

const CalculatorInput = (props) => {
  //const [projectsData, setProjectsData] = useState({});
  const pageTitle = props.pageTitle;
  const [kWPPerHour, setKWPPerHour] = useState(props.project.kWPPerHour || 20);
  const [address, setAddress] = useState(props.project.address);
  const [installmentPlace, setInstallmentPlace] = useState(props.project.installmentPlace||INVESTMENT_PURPOSES[0].label);
  const [errorAddress, setErrorAddress] = useState(null);
  const [invesmentPurpose, setInvesmentPurpose] = useState(props.project.invesmentPurpose || INVESTMENT_PURPOSES[0].label);
  const [hasSlope, setHasSlope] = useState(props.project.hasSlope|| YES_NO[0].label);

  useEffect(() => {
   
    const project = props.project
    
    if (project) {
      console.log(project.kWPPerHour,'project')
      if(project.kWPPerHour){setKWPPerHour(project.kWPPerHour)}
      if(project.address){setAddress(project.address)}
      if(project.installmentPlace){setInstallmentPlace(project.installmentPlace)}
      if(project.invesmentPurpose){setInvesmentPurpose(project.invesmentPurpose)}
      if(project.hasSlope){setHasSlope(project.hasSlope)}
    }
    
  }, [props,kWPPerHour, address, installmentPlace, hasSlope, invesmentPurpose]);

  const validateAddress = (data)=>{
        
    const trimmedValue = data.trim();
    
    const titleLengthMin = 5
    const titleLengthMax = 200
    
    if((trimmedValue.length < titleLengthMin) || (trimmedValue.length > titleLengthMax)){
      const errMsg = `Address should be between ${titleLengthMin} and ${titleLengthMax} characters!`
      setErrorAddress(errMsg);
    }
    else{
      setErrorAddress(null)
    }
    setAddress(trimmedValue);
  }
  
  const handleSubmitCalculationInputs = async (e) => {
    e.preventDefault();
    const canProceed = (!errorAddress) //!errorTitle && !errorDescription && !errorImgUrl && !errorAmount && 
    if(!canProceed){
      return
    }
    const user = JSON.parse(localStorage.getItem('pvStorage'))
    const username = user.email
 
    const payload = {kWPPerHour, address, invesmentPurpose, installmentPlace, hasSlope, username};//title, description, imgUrl, amount, 
    
    console.log('payload',payload)

    props.sendData(payload)
    
  }

  const handleChangeKWPPerHour = (e)=>{
    setKWPPerHour(e.target.value)
  }

  const handleChangeInvestmentPurpose = (e)=>{
    console.log(e.target.value, 'setInvesmentPurpose')
    setInvesmentPurpose(e.target.value)
  }
  const handleChangeInstallmentPlace = (e)=>{
    setInstallmentPlace(e.target.value)
  }
  const handleChangeHasSlope = (e)=>{
    setHasSlope(e.target.value)
  }

  return (
    <MDBContainer className={styles['padding-bottom']}>
      <MDBRow className="mt-8">
        
      <MDBCol md="6 mx-auto">
      <div className="h4 text-center my-4">{pageTitle}</div>
        <form onSubmit={handleSubmitCalculationInputs}> 
        <div className='form-row'>
              
              <div className='form-group col-md-12'>
                <label htmlFor="address">
                  Investments address
                </label>
                <input
                  type="text"
                  name="address"
                  value={address || ''}
                  id="address"
                  className="form-control"
                  onChange={(e)=>{setAddress(e.target.value)}}
                  onBlur = {(e)=> {validateAddress(e.target.value)}}
                  required
                />
                {
                  (errorAddress)? (<div className="text-danger">{errorAddress}</div>):(null)
                }
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor="investmentPurpose">Investment purpose</label>
                
                <select className="browser-default custom-select" id="investmentPurpose" name="investmentPurpose" defaultValue={invesmentPurpose} onChange={handleChangeInvestmentPurpose}>
                  {
                  INVESTMENT_PURPOSES? INVESTMENT_PURPOSES.map((e)=>{return<option key={e.id} name={e.id} value={e.id}>{e.label}</option>}):null
                  }
                  
                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor="installmentPlace">Installment Place</label>
                
                <select className="browser-default custom-select" id="installmentPlace" name="installmentPlace" defaultValue={installmentPlace} onChange={handleChangeInstallmentPlace}>
                  {
                  INSTALLMENT_PLACE? INSTALLMENT_PLACE.map((e)=>{return<option key={e.id} name={e.id} value={e.id}>{e.label}</option>}):null
                  }
                  
                </select>
              </div>
            {/* </div>
            <div className='form-row'> */}
              <div className='form-group col-md-6'>
                <label htmlFor="hasSlope">Has Slope</label>
                
                <select className="browser-default custom-select" id="hasSlope" name="hasSlope" defaultValue={hasSlope} onChange={handleChangeHasSlope}>
                  {
                  YES_NO? YES_NO.map((e)=>{return<option key={e.id} name={e.id} value={e.id}>{e.label}</option>}):null
                  }
                  
                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor="kWPPerHour">Installments max kWp per hour</label>
                
                <select className="browser-default custom-select" id="kWPPerHour" name="kWPPerHour" defaultValue={kWPPerHour} onChange={handleChangeKWPPerHour}>
                  {
                  KWP_ARR? KWP_ARR.map((e, index)=>{return<option key={index} name={index} value={e}>{e}</option>}):null
                  }
                  
                </select>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Get offer</MDBBtn>
            </div>
          </form>
        
        </MDBCol> 

        
      </MDBRow>
    </MDBContainer>
  );
};

export default CalculatorInput;