import React from 'react'
import './About.css'
import school from '../assets/School.jpg'
import college from '../assets/College.jpg'
import graduation from '../assets/graduation.jpg'
export default function About() {
  return (
    <section id="About">
        <span className="Title">About Me</span>
        <span className="Des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima adipisci necessitatibus iure voluptatibus illo id optio? Atque, possimus. Blanditiis officiis quam impedit quis dolores, tempore inventore dolorem quasi saepe quod sint aperiam! Quis?</span>
        <div className="Bars">
        <div className="Bar">
            <img src={school} alt="" className="BarImg" />
            <div className="BarText">
                <h2>Schooling</h2>
                <p>My schooling was done in sri chaitanya (punadipadu) in Vijayawada.I scored 9.8 G.P.A in my 10th standard,as i am intrested in maths so i chose MPC in Intermediate.</p>
            </div>
        </div>
        <div className="Bar">
            <img src={college} alt="" className="BarImg" />
            <div className="BarText">
                <h2>College</h2>
                <p>My college was done in Narayana (saraswati bhavan) in Vijayawada. I scored a total of 967 in my Intermediate.I scored 96 percentile in JEE MAINS.I applied for the Ap Eamcet and Ts Eamcet and got a rank of 1383 and 1157 respectively.So i joined CBIT through the counselling.</p>
            </div>
        </div>
        <div className="Bar">
            <img src={graduation}alt="" className="BarImg" />
            <div className="BarText">
                <h2>B.Tech</h2>
                <p>I am currently pursuing my graduation in Chaitanya Bharathi Institute of Technology with C.G.P.A of 9.18(till Now) and I have completed all the courses.</p>
            </div>
        </div>
    </div>
    </section>
  )
}
