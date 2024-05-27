import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/picture1.jpeg";
// import img2 from "../assets/Images/picture2.jpeg";
// import img3 from "../assets/Images/picture3.jpeg";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  ${'' /* flex-wrap:wrap; */}
  @media (max-width: 48em) {
    width: 90vw;
    ${'' /* flex-direction:column; */}
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  display:flex;
  text-align:justify;
  justify-content:center;
 

  @media (max-width: 64em) {
    width: 80%;

    position: relative;
    ${'' /* margin-top: 23%; */}
     ${'' /* left: 50%; */}
    ${'' /* transform: translate(-50%, -50%) !important; */}
    ${'' /* margin: 0 ;  */}

   padding: 2rem;
    font-weight: 300;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
    display:flex;

    text-align:justify;
    justify-content:center;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    display:flex;
    text-align:justify;
    justify-content:center;
    
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    ${'' /* padding: 2rem; */}
    ${'' /* width: 70%; */}
    display:flex;
    text-align:justify;
    justify-content:center;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  min-height: 100vh; 
  display:flex;
    text-align:justify;
    justify-content:center;
  

  img {
    width: 100%;
    height: auto;
  }

  ${'' /* .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  } */}
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: justify;
    img {
      width: 100%;
      height: auto;
      ${'' /* object-fit: cover; */}
    }

   
  }
  @media (max-width: 48em) {
    width: 100%;
    ${'' /* height:100%; */}
    display: flex;
    justify-content: center;
    align-items: justify;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  @media (max-width: 30em) {
    width: 100%;
    ${'' /* height:100%; */}


    display: flex;
    justify-content: center;
    align-items: justify;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 150;
  /* text-transform: capitalize; */

  position: absolute;
  top: 0.5rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    ${'' /* font-size: ${(props) => `calc(${props.theme.fontmd} - 5vw)`}; */}
    font-size: ${(props) => props.theme.fontxxxl};
    top: 5%;
    left: 15%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
    top:2%;
  }
  @media (max-width: 30em){
    font-size: ${(props) => props.theme.fontxxl};
    top:3%;
    margin-left:10;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Susan Mantosh
      </Title>
      <Left >
      Mrs. Susan Mantosh is an enigmatic persona!
        <br />
        <br/>
        She is an internationally acclaimed fashion designer, a successful business
woman, a socio-religious worker, an and advocate of The Honorable High
Court of Kolkata. She is the face behind Citimart, New Empire Cinema and
restaurants like The Scoop, La Dolce Vita, Oriental Plaza and Miss Ginko’s.
She is also the director of NIFD Global, Kolkata, Lindsay Street.
        <br />
        She has been awarded the Mother Teresa Ratna Award and the Mother
Teresa International and Millenium Award for her exemplary efforts
towards society. Her service to the community extends beyond patronizing
the skills of local artisans in India and Nepal.Mrs. Mantosh has been designing haute couture garments, avant garde
accessories and decorative artifacts for over a decade. She has showcased her
creations at several National and International Fashion Weeks. Her unique
and over the top garments have left an indelible mark on fashion. She is awe
inspiring and jaw dropping.
      </Left>

      <Right>
        <img width="400" height="600" src={img1} alt="About Us" />
        {/* <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        /> */}
        {/* <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        /> */}
      </Right>
    </Section>
  );
};

export default About;
