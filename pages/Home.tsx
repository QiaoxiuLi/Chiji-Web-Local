import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { MinecraftShowcase } from '../components/MinecraftShowcase';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <MinecraftShowcase />
      <Contact />
    </>
  );
};