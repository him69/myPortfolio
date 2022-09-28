import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { addTimeline, deleteTimeline, getUser } from '../../action/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import {FaTrash} from "react-icons/fa"

const Timeline = () => {
    const { message, error, loading } = useSelector((state) => state.update);
    const { user } = useSelector((state) => state.user);


    const dispatch = useDispatch();
    const alert = useAlert();
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addTimeline(tittle, description, date));
        dispatch(getUser())
    };
    const deletetHandler = async(id) => {
       await  dispatch(deleteTimeline(id));
       dispatch(getUser());
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
                    <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} className="adminPanelInput" />
                    <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} className="adminPanelInput" />

                    <Link to="/account">
                        Back <MdKeyboardBackspace />
                    </Link>

                    <Button type="submit" variant="contained" disabled={loading}>
                        Add
                    </Button>
                </form>
                <div className='HomeProjects'>
                    {user && user.timeline && user.timeline.map((iteam) => (
                        <div className='ProjectCard' key={iteam._id}>
                            <Typography variant="h6">{iteam.title}
                            </Typography>
                            <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                                {iteam.description}</Typography>
                            <Typography variant="body1" style={{ fontWeight: 600 }}>
                                {iteam.date.toString().split("T")[0]}</Typography>    <Button style={{
                                    margin: "auto",
                                    display: "block",
                                    color: "rgba(35,267,34,0.7)"

                                }}
                                    onClick={() => deletetHandler(iteam._id)}
                                >
                                <FaTrash />
                            </Button>        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Timeline
