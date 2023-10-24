import React from 'react'
import'./Projects.css'
import p1 from '../assets/project1.png'
import p2 from '../assets/project2.jpg'
import p3 from '../assets/project3.png'

export default function Projects() {
  return (
    <section id="Projects">
        <h1 className="Tit">My Projects</h1>
        <div className="bos">
            <div className="bo">
                <img src={p1}alt="" className="Img" />
                <span className="Desc">BALL CATCHER- (using Tkinter modules in python)</span>
            </div>
            <div className="bo">
                <img src={p2} alt="" className="Img" />
                <span className="Desc">CBIT Academic Management System(Mini Group Project-C Programming)</span>
            </div>
            <div className="bo">
                <img src={p3} alt="" className="Img" />
                <span className="Desc">Stack Visualization and Comparison of Sorting Algorithms(Mini Group ProjectPython , Data Structure)</span>
            </div>
        </div>
    </section>
  )
}
