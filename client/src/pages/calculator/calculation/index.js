import React, { useState } from "react";
import { MDBContainer } from 'mdbreact';

import PageLayout from '../../layout'
import CalculatorInput from '../../../components/calculator/inputs'
import CalculatorResult from '../../../components/calculator/result'


const Calculator = ({ match }) => {
    const [projectsData, setProjectsData] = useState({});
    const [viewResult, setViewResult] = useState(false);
    
    const getData = (project)=>{
        
        setProjectsData(project)
        setViewResult(true)
    }

    const backToInputData = (clearData)=>{
        
        if(clearData){
            setProjectsData({})
        }
        
        setViewResult(false)
    }
  
    return (
      <PageLayout>
        <MDBContainer>
            {viewResult?(
                <CalculatorResult project={projectsData} sendData={backToInputData}/>
            ):(
                <CalculatorInput project={projectsData} sendData={getData}/>
            )}
        </MDBContainer>
      </PageLayout>
    );
  };

export default Calculator;