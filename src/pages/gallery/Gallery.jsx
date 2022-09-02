import React, { Fragment } from 'react';
import "./gallery.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for(let i=1; i<=galleryLength; i++ ){
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <Fragment>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio consectetur dignissimos blanditiis fugit aspernatur, ipsa eos omnis sit.
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((image, index)=>{
              return <article key={index}>
                <img src={image} alt="Image Gallery" />
              </article>
            })
          }
        </div>
      </section>

    </Fragment>
  )
}

export default Gallery