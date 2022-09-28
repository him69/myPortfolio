import { Button, Typography } from '@mui/material'
import React from 'react'
import { AiFillDelete, AiOutlineProject} from "react-icons/ai"
import "./Projects.css"
import Large from "../../images/large.png"
import { useDispatch } from 'react-redux'
import { deleteProjects ,getUser } from '../../action/user'



export const ProjectCard = ({
    url,projectImage,projectTittle,description,technologies,isAdmin=false,id
})=>{
    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
      await dispatch(deleteProjects(id));
      dispatch(getUser());
    };

  
    return(
        <>
        <a href={url} className="ProjectsCard">
            <div>
                <img src={projectImage} alt="Project" />
                <Typography variant="h5">{projectTittle}</Typography>
            </div>
            <div>
            <Typography variant="h4">About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Satck: {technologies}</Typography>

            </div>
        </a>
        {
            isAdmin &&(
                <Button style={{ color:"rgba(40,260,40,0.7)"}}    onClick={() => deleteHandler(id)}>
                   
                    <AiFillDelete/>
                </Button>
            )
        }
        </>
    )
}
const Projects = ({ projects }) => {
    
        return (
    <div className='Projects'>
      <Typography variant="h3">
        Project <AiOutlineProject/>
      </Typography>
      <div className="ProjectsWrapper">
      {projects &&
            projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image.url}
                projectTittle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAdmin={true}
              />
            ))}
      </div>
    </div>
  )
}

export default Projects
