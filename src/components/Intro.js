import React from 'react'
import bg from '../assets/sashank.png'
import'./intro.css'
const Intro = () => {
  return (
    <section id="Intro">
        <div className="IntroContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="IntroName">Sashank</span> <br />Front-end Web Developer</span>
            <p className="IntroPara">I am a skilled Front-end web Developer with experience in creating <br /> visually appealing and user friendly websites</p>
            <span ><button className="btn"><a href="https://drive.google.com/file/d/1vmSOl9N9n7OCa968WQn0vlanrFPr9gqd/view?usp=sharing"target='_blank' rel='noreferrer'><span className='res'>Resume</span></a></button></span>
        </div>
        <img src={bg} className='bg' alt="Profile"/>
    </section>
  )
}

export default Intro
