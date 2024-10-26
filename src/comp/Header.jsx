import React from "react";
import "./header.css"
import { useState } from "react";
import { useEffect } from "react";
export default function Header() {
  let [mood, setmood] = useState({ n: 1, meneu: false, rotated: false });
  let [replac, setreplace] = useState({ body: '#1d1d1d', g: '#ffffff', Ccont: '#414141', sh: '#00e1ff76', trans: '0ms', p: '' })
  useEffect(() => {
    // تغيير قيمة متغير CSS عند تغيير الحالة
    document.documentElement.style.setProperty('--body', replac.body);
    document.documentElement.style.setProperty('--g', replac.g);
    document.documentElement.style.setProperty('--Ccont', replac.Ccont);
    document.documentElement.style.setProperty('--sh', replac.sh);
    document.documentElement.style.setProperty('--trans', replac.trans);
    document.documentElement.style.setProperty('--p', replac.p);


  }, [replac]);
  return (
    <div className="flex cont_hed ">

      <button className="menu" onClick={() => {
        setmood({ ...mood, meneu: true })
      }}>
        <i className="fa fa-bars"></i>
      </button>



      <div className="h"></div>  {/*ديف وهمي*/}
      <ul className="" >
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
      <button className=" btn_header  " onClick={(e) => {
        let target = e.currentTarget;
        target.style.transition = 'transform 800ms';
        if (mood.rotated === false) {
          target.style.transform = 'rotateY(180deg)';
        } else {
          target.style.transform = 'rotateY(0deg)';
        }

        setTimeout(() => {
          if (mood.n === 1)
            setmood({ ...mood, n: 2 })
          else
            setmood({ ...mood, n: 1 })
          if (mood.n === 1) {
            setmood({ ...mood, n: 2, rotated: !mood.rotated });
          } else {
            setmood({ ...mood, n: 1, rotated: !mood.rotated });
          }
        }, 250)

        /*تم تظبيط لنيميشن الايقون */
        if (replac.body === '#1d1d1d')
          setreplace({ ...replac, body: 'white', g: "black", Ccont: 'white', sh: '#0000003a', trans: '400ms', p: '#000000da' })
        else
          setreplace({ ...replac, body: '#1d1d1d', g: "#ffffff", Ccont: '#414141', sh: '#00e1ff76', trans: '600ms', p: '#c0c0c0' })


      }}>
        {mood.n === 1 && <i className="fa fa-moon-o" style={{ fontSize: '20px' }} ></i>}
        {mood.n === 2 && <i className="fas fa-sun" style={{ fontSize: '20px' }} ></i>}
      </button>

      {/*لنبدا بعمل القائمة الفيكسد */}
      {mood.meneu &&
        <div className="fixed_div">

          <ul className="ul_small"  >
            <button className="btn_small" onClick={() => { setTimeout(() => { setmood({ ...mood, meneu: false }) }, 150); }}>x</button>
            <li>
              <a href="">articter</a>
            </li>
            <li>
              <a href="">about</a>

            </li>
            <li>
              <a href="">uses</a>

            </li>
            <li style={{ border: "none", marginBottom: '15px' }}>
              <a href="" >spaeking</a>

            </li >
          </ul>



        </div>

      }
    </div>

  );
}