import React, { useEffect, useState } from 'react';
import { 
  MDBContainer, 
  MDBCol, 
  MDBRow, 
  MDBCard, 
  MDBCardBody, 
  MDBNavLink, 
  MDBCardImage, 
  MDBCardTitle, 
  MDBIcon, 
  MDBBtn,
  MDBCardText } from 'mdbreact';

import { GetAllProjects } from '../../../services/project-service';
import PageLayout from '../../layout'
import styles from './index.module.css'

const AllProjects = () => {

  const [projectsList, setProjectsList] = useState([]);
  const [fillteredProjectsList, setFillteredProjectsList] = useState([]);
  const [search, setSearch] = useState(null);
  const [foundProjects, setFoundProjects] = useState(null);

  const updateFeildsData = ({ target }) => {
    
    const { value } = target;
    setSearch(value);
    
    if(value){
      const fillteredProjects = projectsList.filter(p=>p.title.toLowerCase().includes(value.toLowerCase()))
      
      setFillteredProjectsList(fillteredProjects)
      
      if(fillteredProjects.length > 0) {
        setFoundProjects(fillteredProjects.length)
      }
      return
    }

    setFoundProjects(null)
    setFillteredProjectsList(projectsList)
  };

  useEffect(() => {
    // Define async in order to use await
    const getProjects = async () => {
      const projectsRes = await GetAllProjects();
      
      if (projectsRes) {
        const projects = [];
        for (const projectId in projectsRes) {
          
          projects.push({
            id:projectId,
            ...projectsRes[projectId]
          })};
          
          const displayedLength = 100
          projects.forEach((p)=>{
            if(p.description){
              p.description = 
                (p.description.length > displayedLength) ? 
                  (p.description.slice(0,100).trim() +'...'):(p.description)
            }
          })

          setProjectsList(projects);
          setFillteredProjectsList(projects);
      }
    };

    // Call async function
    getProjects();
  }, []);

  return (
    <PageLayout>
      <MDBContainer className={styles['padding-bottom']}>
        <MDBContainer className={styles['side-margins']}>
          <MDBRow className="no-gutters" center>
            <MDBCol md="12" className="my-3 mx-auto">
              <MDBNavLink to="/project/create" className={styles.link}>
                <MDBBtn className="white-text" color="primary">Add project</MDBBtn>
              </MDBNavLink> 
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
        <MDBContainer className={styles['side-margins']}>
          <MDBRow className="no-gutters" center>
            <MDBCol md="12" className="my-3 mx-auto">
              <div className="input-group form-lg form-1 pl-0">
                <input 
                  type="search"
                  name="search"
                  value={search || ''}
                  id="search"
                  className="form-control"
                  onChange={updateFeildsData}
                  placeholder="Search by project"
                  aria-label="Search address"
                />

                <div className="input-group-append">
                  <span className="input-group-text lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                  </span>
                </div>
              </div>
            </MDBCol>
            
          </MDBRow>
          <MDBRow className="no-gutters" center>
            <MDBCol md="12" className="my-1 mx-auto">
            {
              (foundProjects)? (<span>Founded projects: {fillteredProjectsList.length}</span>):(null)
            }
            </MDBCol>
          </MDBRow>
        </MDBContainer>
          
        <MDBRow className="mt-5">
          <MDBCol lg="12" md="12">
            {projectsList.length > 0? 
              <MDBRow>
                { 
                  (fillteredProjectsList.length > 0)?
                  fillteredProjectsList.map((project) => {
                    return (
                      <MDBCol lg="6" className="card-deck mb-5 mr-2" key={project.id}>
                        <MDBContainer
                          header='AllProjects'
                          className='justify-content-center d-flex'
                        >
                          <MDBCard cascade narrow ecommerce>
                            <MDBCardImage
                              className='img-fluid'
                              src={project.imgUrl}
                              waves
                            />
                            <MDBCardBody>
                              <MDBCardTitle>
                                  Project:
                                  </MDBCardTitle>
                                  <MDBCardTitle className={styles['title-padding']}> 
                                  {project.title}
                                
                              </MDBCardTitle>
                              <MDBCardText>
                                {project.description}
                              </MDBCardText>
                              <MDBRow>
                                <MDBNavLink to={`/project/details/${project.id}`} className={styles.link}>
                                  <MDBBtn className="white-text" color="primary">Details</MDBBtn>
                                </MDBNavLink>
                                <MDBNavLink to={`/project/edit/${project.id}`} className={styles.link}>
                                  <MDBBtn className="white-text" color="primary">Edit</MDBBtn>
                                </MDBNavLink>
                              </MDBRow>
                            
                            </MDBCardBody>
                          </MDBCard>
                        </MDBContainer>
                      </MDBCol>
                    
                  
                  );
                }):(
                  <MDBCol lg="6" className="card-deck mb-5 mr-2">
                    <MDBContainer>
                      <MDBRow>
                        Project not found
                      </MDBRow>
                    </MDBContainer>
                  </MDBCol>
                )
                
              }
            </MDBRow>
            :
            <MDBRow>
              <p>Loading ...</p>
            </MDBRow>
            }     
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </PageLayout>
  );
}

export default AllProjects;