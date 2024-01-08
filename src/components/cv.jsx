import React from "react";
import { Box, Button, ButtonGroup, Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavCv from "./navbarCv";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";

import gmail from "../assets/gmail.jpg";
import linkedinn from "../assets/linkedinn.png";
import github from "../assets/github.png";
import insta from "../assets/insta.jpg";

export default function Cv() {
  const MotionBox = motion(Box);
  const email = "mailto:maulanaalhaj11@gmail.com";
  const instagramURL =
    "https://www.instagram.com/mhdmaulanaalhaj?igshid=OGQ5ZDc2ODk2ZA==";
  const linkedinURL =
    "https://www.linkedin.com/in/muhammad-maulana-al-haj-77b42a23a";
  const githubURL = "https://github.com/mhdmaulanaalhaj";

  return (
    <>
      <style>
        {`
          body {
            background-color: #F2F1EB; 
          }
        `}
      </style>
      <NavCv />
      <Center fontSize={"20px"} fontWeight={"bold"} fontFamily={"serif"}>
        Bio
      </Center>

      <Center>
        <Center gap={"10px"} bgColor={"#F2F1EB"} w={"1500px"}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            textAlign={"center"}
            w={"500px"}
          >
            <Image borderRadius={"12px"} w={"400px"} h={"auto"} src={foto1} />
            <Box w={"400px"}>Web Development</Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            w={"500px"}
            h={"440px"}
          >
            <Box fontSize={"30px"} fontWeight={"bold"}>
              Muhammad Maulana Al Haj
            </Box>
            <Box>
              I'm a believer in lifelong learning, thriving in the face of
              challenges, and adopting a "do whatever it takes" mentality.
            </Box>
          </MotionBox>
        </Center>
      </Center>
      <Center fontSize={"20px"} fontWeight={"bold"} fontFamily={"serif"}>
        SKILLS
      </Center>
      <Button>HTML</Button>
      <Button>CSS</Button>
      <Button>JAVASCRIPT</Button>
      <Button>GITHUB</Button>

      <Center fontSize={"20px"} fontWeight={"bold"} fontFamily={"serif"}>
        PORTFOLIO
      </Center>
      <Center>
        <Center
          gap={"10px"}
          bgColor={"#F2F1EB"}
          w={"1500px"}
          flexDir={"column"}
        >
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            textAlign={"center"}
            w={"500px"}
          >
            JUDUL
          </MotionBox>
          <MotionBox>let's collaborate with us </MotionBox>
          <Box>You can find me on : </Box>
          <Box display={"flex"} gap={"10px"}>
            <Image w={"50px"} h={"50px"} src={gmail} />
            <Image w={"50px"} h={"50px"} src={linkedinn} />
            <Image w={"50px"} h={"50px"} src={github} />
          </Box>
        </Center>
      </Center>

      <Center fontSize={"20px"} fontWeight={"bold"} fontFamily={"serif"}>
        CONTACS
      </Center>
      <Center>
        <Center
          gap={"10px"}
          bgColor={"#F2F1EB"}
          w={"1500px"}
          flexDir={"column"}
        >
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            textAlign={"center"}
            w={"500px"}
          >
            Web Development
          </MotionBox>
          <MotionBox>let's collaborate with us </MotionBox>
          <Box>You can find me on : </Box>
          <Box display={"flex"} gap={"10px"}>
            <a href={email}>
              <Image w={"50px"} h={"50px"} src={gmail} />
            </a>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <Image w={"50px"} h={"50px"} src={linkedinn} />
            </a>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <Image w={"50px"} h={"50px"} src={github} />
            </a>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer">
              <Image w={"50px"} h={"50px"} src={insta} alt="Instagram" />
            </a>
          </Box>
        </Center>
      </Center>
      {/* Other sections with animations */}
    </>
  );
}
