import React from 'react'
import './Skills.css'
import h from '../assets/HTML5.svg'
import c from '../assets/css-3.png'
import j from '../assets/Js.svg'
import r from '../assets/React.svg'
import ja from '../assets/Java.svg'
import sq from '../assets/Sql.png'
import lead from '../assets/Leadership.jpg'
import time from '../assets/Time Management.jpg'
import team from '../assets/Team_work.jpg'
import prob from '../assets/Problem solving.svg'
export default function Skills() {
  return (
    <section id="Skills">
        <h2 className='Titl'>Skills</h2>
        <div className="Imgs">
            <div className="box">
            <img src={h}alt="" className="Iamg" />
               <span className="Text"><b>
                HTML</b></span>   
            </div>
            <div className="box">
            <img src={c}alt="" className="Iamg" />
               <span className="Text"><b>CSS</b></span>   
            </div>
            <div className="box">
            <img src={j}alt="" className="Iamg" />
               <span className="Text"><b>JS</b></span>   
            </div>
            <div className="box">
            <img src={r}alt="" className="Iamg" />
               <span className="Text"><b>React</b></span>   
            </div>
            <div className="box">
            <img src={ja}alt="" className="Iamg" />
               <span className="Text"><b>Java</b></span>   
            </div>
            <div className="box">
            <img src={sq}alt="" className="Iamg" />
               <span className="Text"><b>Sql</b></span>   
            </div>
            <div className="box">
            <img src={prob}alt="" className="Iamg" />
               <span className="Text"><b>Problem Solving</b></span>   
            </div>
            <div className="box">
            <img src={lead}alt="" className="Iamg" />
               <span className="Text"><b>Leadership</b></span>   
            </div>
            <div className="box">
            <img src={time}alt="" className="Iamg" />
               <span className="Text"><b>Time Management</b></span>   
            </div>
            <div className="box">
            <img src={team}alt="" className="Iamg" />
               <span className="Text"><b>Organizing</b></span>   
            </div>

        </div>

    </section>
  )
}
