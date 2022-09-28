import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import {   addProjects,  deleteProjects,  getUser } from '../../action/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
// import Projects from '../Projects/Projects';
import{ ProjectCard} from '../Projects/Projects';


const Project = () => {
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);


    const dispatch = useDispatch();
    const alert = useAlert();
    const [tittle,setTittle] = useState("");
    const [url,setUrl] = useState("");
    const [image,setImage] = useState("");
    const [description,setDescription] = useState("");
    const [techStack,setTechStack] = useState("");


    const submitHandler = async (e)=>{
        e.preventDefault();
        await dispatch(addProjects(tittle,url,image,description,techStack));
        dispatch(getUser())
    };
    const deletetHandler = (id)=>{
         dispatch(deleteProjects(id))
    };  
    const handleImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
    
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setImage( Reader.result );
          }
        };
      };
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
          alert.success(message);
          dispatch({ type: "CLEAR_MESSAGE" });
        }
       
      }, [alert, error, message, dispatch]);
  return (
    <div className='AdminPannel'>
            <div className='AdminPannelContainer'>
                <Typography variant="h4">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{ marginRight: "1vmax" }}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>
                <form action="" onSubmit={submitHandler}>
                    <input type="text" placeholder='Tittle' value={tittle} onChange={(e) => setTittle(e.target.value)} className="adminPanelInput" />
                    <input type="text" placeholder='Link' value={url} onChange={(e) => setUrl(e.target.value)} className="adminPanelInput" />
                    <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} className="adminPanelInput" />
                    <input type="text" placeholder='Technologies' value={techStack} onChange={(e) => setTechStack(e.target.value)} className="adminPanelInput" />
                    <input type="File"  
                        onChange={handleImage}  accept='image/*' className="adminPanelFileUpload" />

                    <Link to="/account">
                   Back <MdKeyboardBackspace/> 
                    </Link>
                    
                    <Button type="submit" variant= "contained" disabled={loading}>
                        Add
                    </Button>
                </form>
                <div className='HomeProjects'>
                {user &&
            user.projects &&
            user.projects.map((item) => (
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
        </div>

  )
}

export default Project
