import React from "react";
import "./header.css"
import { useState } from "react";
export default function Header() {
    let[mood,setmood]=useState({n:1,stat:true,rotated:true});

    function addanimation(e){
       

}
    return (
        <div className="flex cont_hed ">
            
            
            <div></div>
            <ul className=" flex " >
                <li>
                <a href="">articter</a>
                </li>
                <li>
                <a href="">about</a>

                </li>
                <li>
                <a href="">uses</a>

                </li>
                <li>
                <a href="">spaeking</a>

                </li>
            </ul>
            <button className=" btn_header  " onClick={(e)=>{
                let target=e.currentTarget;
                target.style.transition='transform 700ms';
                if (!mood.rotated) {
                    target.style.transform = 'rotateY(180deg)';
                  } else {
                    target.style.transform = 'rotateY(0deg)';
                  }
                target.style.transition='transform 700ms';
                 
                 setTimeout(()=>{
                    if(mood.n===1)
                     setmood({...mood,n:2})
                 else
                 setmood({...mood,n:1})
                 if (mood.n === 1) {
                    setmood({...mood ,n: 2, rotated: !mood.rotated });
                  } else {
                    setmood({ ...mood ,n: 1, rotated: !mood.rotated });
                  }
                },250)
            }}>
                {mood.n===1&&<i className="fa fa-moon-o" style={{fontSize:'20px'}} ></i>}
            {mood.n===2&&<i className="fas fa-sun" style={{fontSize:'20px'}} ></i>}
            </button>

        </div>

    );
}