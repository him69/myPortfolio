import React from 'react'
import { Button, Typography } from "@mui/material"
import "./ProjectCard.css"
import { FaTrash } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { deleteHomeProjects, getUser } from '../../action/user'
const ProjectCard = ({
  url = "this is url",
  tittle = "Tittle",
  image,
  isAdmin = false,
  id,

}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteHomeProjects(id));
    dispatch(getUser())
  }
  return (
    <div className='ProjectCard
      '>
      <a href={url} target="blank">
        <img src={image} alt="Project" />
        <Typography>{tittle}</Typography>
      </a>
      {
        isAdmin && <Button style={{
          margin: "auto",
          display: "block",
          color: "rgba(35,267,34,0.7)"

        }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      }
    </div>
  )
}

export default ProjectCard
