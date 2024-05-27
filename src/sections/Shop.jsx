import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/first - Copy.png";
import img2 from "../assets/Images/second - Copy.png";
import img3 from "../assets/Images/third.png";
import img4 from "../assets/Images/foutrh - Copy.png";
import img5 from "../assets/Images/fourth1.png";
// import img6 from "../assets/Images/6.webp";
// import img7 from "../assets/Images/7.webp";
// import img8 from "../assets/Images/8.webp";
// import img9 from "../assets/Images/9.webp";
// import img10 from "../assets/Images/10.webp";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color:black;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    top:1rem;
    z-index: 11;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  text-align:justify;

  p {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 300;
    width: 90%;
    margin: 0 auto;
    display: flex;
  justify-content: center;
  text-align:justify;
  margin-top:10%

  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontsm};
      font-weight: 300;
    width: 80%;
      display: flex;
  justify-content: center;
  text-align:justify;
    }
  }

  @media (max-width: 48em) {
    width: 60%;
   
    p {
      font-size: ${(props) => props.theme.fontsm};
     
    }
  }
  @media (max-width: 30em) {
    width:60%;
    p {
      font-size: ${(props) => props.theme.fontxs};
      width:90%;
      display: flex;
  justify-content: center;
  text-align:justify;
  
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      
      <Left>
        <p>
        Mrs. Susan Mantosh’s “The Katha of Kantha” the tale of Bengal through its traditional stitch - “Kantha” but with
an unusual rendition.Kantha is one of the oldest forms of embroidery that originated in Bengal. She presents a twist to this tale. The
Kantha stitch is normally rendered exclusively on cotton or pure silk fabrics but for the first time she has
used the age old embroidery on non-traditional fabrics like satin, tissue brocades, velvet, glass tissue, net and tant
and also has simulated the Kantha stitch using kutdana beads to give a whole new shiny facet to the stitch.
          
          Her new &amp; latest creations are the Leather Kundan bags which are made from pure Napa, and adorned with
specially created kundan, for the first time in the leather and kundan fashion history.To highlight the entire Haute Couture Ensemble, she has adorned every outfit not only with exquisite leather
accessories, but also with her trademark one - of - a - kind KETTLE HANDBAGS, which have been artistically
embellished with leather &amp; bead craft, thereby creating a new dimension in the leather industry, which are simply
awe inspiring with their INTRINSIC, ETHEREAL, ETERNAL CHARM and BEAUTY. This Classy collection is
true “Fantasy, difficult to ignore and indeed a reason for EVERY SEASON”.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
      <Title data-scroll data-scroll-speed="-1" text-align="centre">
      The Katha of Kantha
      </Title>
        <Product img={img3} title="" />
        <Product img={img4} title="" />
        <Product img={img1} title="" />
        <Product img={img2} title="" />
        <Product img={img5} title="" />
        {/* <Product img={img5} title="lorem ipsum" />/
        <Product img={img6} title="lorem ipsum" />
        <Product img={img7} title="lorem ipsum" />
        <Product img={img8} title="lorem ipsum" />
        <Product img={img9} title="lorem ipsum" />
        <Product img={img10} title="lorem ipsum" /> */}
      </Right>
    </Section>
  );
};

export default Shop;
