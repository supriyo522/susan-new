import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/image13.jpg';
import img2 from '../assets/Images/image19.jpg';
import img3 from '../assets/Images/image16.jpg';
import img4 from '../assets/Images/image17.jpg';
import img5 from '../assets/Images/image18.jpg';
// import img6 from '../assets/Images/image6.jpg';
// import img7 from '../assets/Images/image7.jpg';
// import img8 from '../assets/Images/image8.jpg';
// import img9 from '../assets/Images/image9.jpg';
// import img10 from '../assets/Images/image10.jpg';
// import img11 from '../assets/Images/image11.jpg';




const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Kaushan Script';
  font-weight: 200;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2.5rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    top:1rem;
    left: 1rem;
  z-index: 15;


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    ${'' /* buttom:1rem; */}
  
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    top:2rem;
    ${'' /* buttom:1rem; */}
  
  }
`;
const Text = styled.div`
  width: 80%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
  span {
    font-size: ${(props) => props.theme.fontxl}; /* Larger font size for "lookbook" */
    font-family: 'Kaushan Script';
    font-weight: bold;
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="200" height="400" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
   gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);


  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
let t1= gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section  ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        Delhi Times Fashion Week 2024
      </Title>

      <Container ref={ScrollingRef}>
        <Photos img={img1} name="" />
        <Photos img={img2} name="" />
        <Photos img={img3} name="" />
        <Photos img={img4} name="" />
        <Photos img={img5} name="" />

        {/* <Photos img={img2} name="Garment No. 2" />
        <Photos img={img3} name="Garment No. 3" />
        <Photos img={img4} name="Garment No. 4" />
        <Photos img={img5} name="Garment No. 5" />
        <Photos img={img6} name="Garment No. 6" />
        <Photos img={img7} name="Garment No. 7" />
        <Photos img={img8} name="Garment No. 8" />
        <Photos img={img9} name="Garment No. 9" />
        <Photos img={img10} name="Garment No. 10" />
        <Photos img={img11} name="Garment No. 11" /> */}

      </Container>

      <Text data-scroll data-scroll-speed="-4">
       <span> Look
        <br/>Book</span>
        <br />
        <br />
       
        <br />
        <br />
        
      </Text>
    </Section>
  );
};

export default NewArrival;
