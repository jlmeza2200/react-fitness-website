import React, { Fragment } from 'react';
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"

const Contact = () => {
  return (
    <Fragment>
      <Header title="Get In Touch" image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a atque error repudiandae? Perspiciatis corporis sapiente praesentium at.
      </Header>
      
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
          <a href="mailto:info@jonatanmeza.com" target="_blank" rel='noreferrer noopener'> <MdEmail/> </a>
          <a href="#" target="_blank" rel='noreferrer noopener'> <BsMessenger/> </a>
          <a href="#" target="_blank" rel='noreferrer noopener'> <IoLogoWhatsapp/> </a>
          </div>
        </div>
      </section> 
    </Fragment>
    
  )
}

export default Contact