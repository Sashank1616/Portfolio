import React, { useRef } from 'react'
import './Contact.css'
import f from '../assets/facebook.png'
import i from '../assets/instagram.jpg'
import t from '../assets/twitter-logo-2429.png'
import l from '../assets/leetcode.png'
import li from '../assets/linkedin.png'
import g from '../assets/github.png'
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0eonfys', 'template_ghq0jxt', form.current, 'LLKHQIjYBSbkKzbhB')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="Contact">
            <h1 className="Tite">Contact Me</h1>
            <span className="De">Please fill out the form below to contact me</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea name="message" className="msg" rows='5' placeholder='Your Message'></textarea>
                <button type='submit' className='submitBtn' value='send'><b>Submit</b> </button>
                <div className="links">
                    <a href="https://www.facebook.com/madhavarapu.sashank?mibextid=ZbWKwL"  target='_blank'rel='noreferrer'>
                    <img src={f} alt="" className="link" /></a>
                    <a href="https://www.instagram.com/sashank__sasi_9063/" target='_blank'rel='noreferrer'>
                    <img src={i} alt="" className="link" /></a>
                    <a href="https://twitter.com/0Sashank26510" target='_blank'rel='noreferrer'>
                    <img src={t} alt="" className="link" /></a>
                    <a href="https://github.com/Sashank1616" target='_blank'rel='noreferrer'>
                        <img src={g} alt=""className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/madhavarapu-sashank-a7633626b/" target='_blank'rel='noreferrer'>
                        <img src={li} alt=""className="link" />
                    </a>
                    <a href="https://leetcode.com/sashank9063/" target='_blank'rel='noreferrer'>
                        <img src={l} alt=""className="link" />
                    </a>
                </div>
            </form>
        </section>
    )
}
