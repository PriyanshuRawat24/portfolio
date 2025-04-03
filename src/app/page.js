"use client";

import Carousel from "./Components/carousel";
import Experience from "./Components/experience";
import Hero from "./Components/hero";
import Projects from "./Components/project";
import Technologies from "./Components/technologies";
import Contact from "./Components/contact";


export default function Home() {
  return (
    <>

      <Hero />

      <div id="projects">
        <Projects />

      </div>
      <Carousel />

      <hr />
<div id="technologies">
      <Technologies />
</div>

      <hr />

      <div id="experience">
        <Experience />
      </div>

      <hr />
      <div id="contact">
        <Contact />
      </div>


      <hr />






    </>
  );
}
