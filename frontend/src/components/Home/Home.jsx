import React, { useEffect } from 'react'
import "./Home.css"
import *as THREE from "three"
import { Link } from "react-router-dom";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../images/moon.webp"
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/space.jpg"
import { Typography } from "@mui/material"

import TimeLine from '../Timeline/Timeline'
import {
    SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs
} from "react-icons/si"
import ProjectCard from '../ProjectCard/ProjectCard'
import { MouseOutlined } from '@mui/icons-material';

function Home({ timeline, project, skills }) {
    useEffect(() => {
        const textureLoder = new THREE.TextureLoader();
        const moonTexture = textureLoder.load(moonImage);
        const venusTexture = textureLoder.load(venusImage);
        const spaceTexture = textureLoder.load(spaceImage);


        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        //  const geomertry = new THREE.BoxGeometry(1/*height*/,1/*width*/,1/* depth */)// it basically a cube or cuboid
        const moongeomertry = new THREE.SphereGeometry(2, 64, 64);// this is sphere
        // const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })// this is skin on geometry 'it is basic mesh'
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });// this is skin on geometry "this mesh respond with light"
        const moon = new THREE.Mesh(moongeomertry, moonMaterial);

        const venusgeomertry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusgeomertry, venusMaterial);


        const pointlight = new THREE.PointLight(0xffffff, 1/*intensity */,/*100 distance*/);
        const pointlight2 = new THREE.PointLight(0xffffff, 0.1/*intensity */,/*100 distance*/);
        pointlight.position.set(8, 5, 5);
        pointlight2.position.set(-8, -5, -5);
        // const lightHelper = new THREE.PointLightHelper(pointlight);


        // const control = new OrbitControls(camera , renderer.domElement);
        scene.add(moon);
        scene.add(pointlight);
        scene.add(pointlight2);
        // scene.add(lightHelper);
        scene.add(venus);
        scene.background = spaceTexture;

        const constSpeed = 0.01
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
                // venus.position.x = -4
            }
            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
                // venus.position.x = -4
            }
            if (e.clienty > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
                // venus.position.x = -4
            }
            if (e.clienty <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        });

        venus.position.set(8, 5, 5)
        camera.position.set(4, 4, 8)
        // recurcive function to render animatin again and again
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.01;
            venus.rotation.y += 0.013;
            //   venus.position.x += 0.01
            //   venus.position.z += 1
            // camera.position.x +=0.01
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }
        animate();

        return window.addEventListener("scroll", () => {
            camera.rotation.y = window.scrollY * 0.003
            camera.rotation.Z = window.scrollY * 0.001

            const skillBox = document.getElementById("homeSkillBox");

            if (window.scrollY > 1100) {
                skillBox.style.animationName = "homeSkillsBoxAnimationOn"
            }
            else {
                skillBox.style.animationName = "homeSkillBoxAnimationOff"

            }
        })
    }, []
    )

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>
            <div className='homeCanvasContainer'>
                <Typography variant="h1">
                    <p>H</p>
                    <p>I</p>
                    <p>M</p>
                    <p>A</p>
                    <p>N</p>
                    <p>S</p>
                    <p>H</p>
                    <p>U</p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant="h2">DESIGNER</Typography>
                    <Typography variant="h2">DEVELOPER</Typography>
                    <Typography variant="h2">STUDENT</Typography>

                </div>

                <Link to="/project">VIEW WORK</Link>
            </div>
            <div className="homeScrollBtn">
                <MouseOutlined />
            </div>
            <div className="homeContainer">
                <Typography variant="h3">TIMELINE</Typography>
                <TimeLine timelines={timeline} />

            </div>
            <div className="homeSkills">
                <Typography variant='h3'>SKILLS</Typography>
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={skills.image1.url} alt="Face1" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={skills.image2.url} alt="Face1" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={skills.image3.url} alt="Face1" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={skills.image4.url} alt="Face1" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={skills.image5.url} alt="Face1" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={skills.image6.url} alt="Face1" />
                    </div>
                </div>
                <div className='CubeShadow'>
                </div>
                <div className="homeSkillBox" id="homeSkillBox">
                    <SiBootstrap />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiReact />
                    <SiNodedotjs />
                </div>

            </div>
            <div className='homeProject'>
                <Typography variant="h3">PROJECTS</Typography>

                <div className="homeProjectWapper">
                    {project && project.map(iteam => (
                        <ProjectCard image={iteam.image.url} tittle={iteam.tittle} url={iteam.url} />
                    ))}

                    {/* <ProjectCard  image={ProjectImag} tittle="sampale video"/>
                    <ProjectCard  image={ProjectImag} tittle="sampale video"/>
                    <ProjectCard  image={ProjectImag} tittle="sampale video"/>
                    <ProjectCard  image={ProjectImag} tittle="sampale video"/> */}

                </div>
            </div>

        </div>
    )
}

export default Home;
