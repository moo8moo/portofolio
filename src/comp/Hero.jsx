import "./hero.css"
import { useState } from "react"

export default function Hero() {


    return (

        <div className={'flex  hero'} >
            {/**لشمال */}
            <div className="left_hero ">
                <img src="https://avatars.githubusercontent.com/u/169398106?v=4" width={'200px'} className="img" ></img>
                <span style={{color:'white',background:'#31cef9da',borderRadius:'50%' ,padding:'4px',position:"relative" ,top:'-10px',zIndex:'0'}}>&#10003;</span>
                <h1>mohaned nabil</h1>
                <p className="p_hero">As a skilled front-end developer with over one and a half years of experience, I specialize in creating efficient and visually appealing web applications. My expertise includes HTML, CSS, JavaScript, and React.js, where I focus on delivering seamless user interfaces and ensuring a responsive, dynamic user experience.</p>
            </div>
            {/*الانيمميشن */}
            <div className="animation_hero ">
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
                <div className="ani"></div>
            </div>

        </div>
    );
}