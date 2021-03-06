import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { MDBContainer } from 'mdbreact';

// import styles from './index.module.css';
import PageLayout from '../../layout'
import { AddProject } from '../../../services/project-service'
import ProjectComponent from '../../../components/projects'


const ProjectCreate = (props) => {
  const [projectsData, setProjectsData] = useState({});
  const history = useHistory();
  const pageTitle = 'Add new project'
  
  const handleSubmitNewProject = async (project) => {
    setProjectsData(project)
    const createdAt = new Date();
    const isDeteted = false;
    const payload = {...project,createdAt,isDeteted};
    
    const projectSaved = await AddProject(payload);
    if(projectSaved){
      history.push('/projects');
    }
    
  }

  return (
    <PageLayout>
      <MDBContainer>
        <ProjectComponent pageTitle={pageTitle} project={projectsData} sendData={handleSubmitNewProject}/>
      </MDBContainer>
    </PageLayout>
  );
};

export default ProjectCreate;