import React, { Fragment } from 'react';
import Header from '../../components/Header';
import "./about.css";
import Image from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <Fragment>
      <Header title="About Us" image={Image}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio explicabo porro rerum similique dolores dolorem necessitatibus laborum delectus tempore voluptatum.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quod, consequatur blanditiis consequuntur temporibus officia nam? Doloremque voluptates necessitatibus officiis aut recusandae cumque ea, itaque vero earum aliquid porro beatae distinctio. Aliquam ex nihil corporis obcaecati! Veritatis quisquam architecto similique.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat facilis nulla quia blanditiis voluptate veritatis iusto? Error ratione, harum quisquam tempore enim at quo maiores, laboriosam iusto culpa vel reprehenderit dolore dignissimos maxime nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci, accusantium dignissimos reprehenderit quasi deleniti suscipit alias aspernatur.
            </p>
          </div>
        </div>
      </section>

      {/*Vision Section  */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quod, consequatur blanditiis consequuntur temporibus officia nam? Doloremque voluptates necessitatibus officiis aut recusandae cumque ea, itaque vero earum aliquid porro beatae distinctio. Aliquam ex nihil corporis obcaecati! Veritatis quisquam architecto similique.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat facilis nulla quia blanditiis voluptate veritatis iusto? Error ratione, harum quisquam tempore enim at quo maiores, laboriosam iusto culpa vel reprehenderit dolore dignissimos maxime nostrum?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      {/*Mision Section  */}
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quod, consequatur blanditiis consequuntur temporibus officia nam? Doloremque voluptates necessitatibus officiis aut recusandae cumque ea, itaque vero earum aliquid porro beatae distinctio. Aliquam ex nihil corporis obcaecati! Veritatis quisquam architecto similique.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat facilis nulla quia blanditiis voluptate veritatis iusto? Error ratione, harum quisquam tempore enim at quo maiores, laboriosam iusto culpa vel reprehenderit dolore dignissimos maxime nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci, accusantium dignissimos reprehenderit quasi deleniti suscipit alias aspernatur.
            </p>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default About