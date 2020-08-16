import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom"
import { MDBContainer } from 'mdbreact';

import { EditProject, GetProjectDetails} from '../../../services/project-service';
import PageLayout from '../../layout'
import ProjectComponent from '../../../components/projects'

const ProjectEdit = ({ match }) => {
  const pageTitle = 'Edit project';
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

  const handleSubmitEditProject = async (project) => {
    setProjectsData(project)
    
    const payload = {...project};
    
    const { id } = match.params;
    const projectSaved = await EditProject(payload, id);
    if(projectSaved){
      history.push('/projects');
    }
  }
 
  return (
    <PageLayout>
      <MDBContainer>
        <ProjectComponent pageTitle={pageTitle} project={projectsData} sendData={handleSubmitEditProject}/>
      </MDBContainer>
    </PageLayout>
  );
};

export default ProjectEdit;