import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom"
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBCardImage, MDBCard } from 'mdbreact';

import { EditProject, GetProjectDetails} from '../../../services/project-service';
import PageLayout from '../../layout'


const ProjectEdit = ({ match }) => {
    const [projectsData, setProjectsData] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        const { id } = match.params;
    
        if (id) {
        const getProjectById = async (id) => {
            const project = await GetProjectDetails(id);
            
            if (project) {
                setProjectsData(project);
            
            }
        };

        getProjectById(id);
        }
    }, [match.params]);

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
  
    const handleSubmitEditProject = async (e) => {
      e.preventDefault();
      const { id } = match.params;
  
      const payload = projectsData;
      
      const project = await EditProject(payload, id);
      if(project){
        history.push('/projects');
      }
      
    }
    
    const {
        title, 
        description, 
        imgUrl, 
        amount
    } = projectsData;
  
    return (
      <PageLayout>
        <MDBContainer>
          <MDBRow className="mt-8">
            
            <MDBCol md="6 mx-auto">
            <div className="h4 text-center my-4">Add New Project</div>
            <form onSubmit={handleSubmitEditProject}> 
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
      </PageLayout>
    );
  };

export default ProjectEdit;