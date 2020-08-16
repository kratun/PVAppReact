import React, { useState } from "react";
import { MDBContainer } from 'mdbreact';

import PageLayout from '../../layout'
import CalculatorInput from '../../../components/calculator/inputs'
import CalculatorResult from '../../../components/calculator/result'


const Calculator = (props) => {
    const [projectsData, setProjectsData] = useState({});
    const [viewResult, setViewResult] = useState(false);
    const pageTitleInput = 'Calculate the approximate value of the investment';
    const pageTitleResult = 'Аpproximate value of the investment';
    
    const getData = (project)=>{
        
        setProjectsData(project)
        setViewResult(true)
    }

    const backToInputData = (clearData)=>{
        
        if(clearData){
            setProjectsData({})
        }
        console.log(projectsData, 'projectsData')
        setViewResult(false)
    }
  
    return (
      <PageLayout>
        <MDBContainer>
            {viewResult?(
                <CalculatorResult pageTitle = {pageTitleResult} project={projectsData} sendData={backToInputData}/>
            ):(
                <CalculatorInput pageTitle = {pageTitleInput} project={projectsData} sendData={getData}/>
            )}
        </MDBContainer>
      </PageLayout>
    );
  };

export default Calculator;