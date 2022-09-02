import React from 'react'
import MainHeader from "../../components/MainHeader";
import { Fragment } from 'react';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Fragment>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </Fragment>
  )
}

export default Home