import React, { useEffect, useState } from 'react';

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
  MDBNavLink
} from 'mdbreact';



import styles from './index.module.css';
import PageLayout from '../../layout'
import { GetProjectDetails} from '../../../services/project-service';

const ProjectDetails = ({ match, history }) => {
  
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    const { id } = match.params;
    
    if (id) {
      const getProjectById = async (id) => {
        const project = await GetProjectDetails(id);
        
        if (project) {
          setProject(project);
          
        }
      };

      getProjectById(id);
    }
  }, [match.params]);


  return (
    project ? (
      <PageLayout>
        <MDBRow className={styles['top-margin']}>
          <MDBCol>
            <MDBContainer
              header='Reversed card'
              className='justify-content-center d-flex'
            >
              <div className={styles.padding}>
                <h1>
                  {project.title}
                </h1>
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
                  <MDBNavLink to={`/projects`} style={{padding:0}}>
                    <MDBBtn className="white-text" color="primary">Back</MDBBtn>
                  </MDBNavLink>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>

      </PageLayout>
    ) : (null)
  )
}

export default ProjectDetails;