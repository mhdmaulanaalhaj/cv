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
import mms from "../assets/mms.png";
import skills from "../assets/skills.png";
import ty from "../assets/ty.png";

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
        ABOUT
      </Center>
      <Center>
        <Center gap={"10px"} bgColor={"#F2F1EB"} w={"1500px"} mt={"40px"}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            textAlign={"center"}
            w={"500px"}
          >
            <Image borderRadius={"12px"} w={"400px"} h={"auto"} src={foto1} />
            <Box fontWeight={"bold"} w={"400px"}>
              Web Development
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            w={"500px"}
            h={"440px"}
          >
            <Box fontSize={"35px"} fontWeight={"bold"}>
              Muhammad Maulana Al Haj
            </Box>
            <Box mt={"20px"}>
              Enthusiastic and aspiring Junior Web Developer with a passion for
              crafting clean, user-friendly interfaces.
            </Box>
            <Box mt={"30px"}>
              Proficient in HTML, CSS, and JavaScript with the library ReactJS,
              as well as Git and Github.
            </Box>
            <Box mt={"30px"}>
              I'm a believer of a life long learning, thriving in the face of
              challenges and do whatever it takes mentality.
            </Box>
          </MotionBox>
        </Center>
      </Center>
      <Center
        fontSize={"20px"}
        fontWeight={"bold"}
        fontFamily={"serif"}
        mt={"40px"}
      >
        SKILLS
      </Center>
      <Center>
        <Center gap={"20px"} bgColor={"#F2F1EB"} w={"1500px"} mt={"40px"}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            w={"480px"}
            h={"auto"}
          >
            <Box>
              HTML, short for HyperText Markup Language, is a markup language
              used to build the basic structure of web pages.
            </Box>
            <Box mt={"30px"}>
              CSS, short for Cascading Style Sheets, is a language used to
              control the presentation and formatting of elements that have been
              created with HTML on a web page.
            </Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            textAlign={"center"}
            w={"400px"}
          >
            <Image borderRadius={"12px"} w={"400px"} h={"auto"} src={skills} />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            w={"480px"}
            h={"auto"}
          >
            <Box>
              JavaScript is a programming language used to make web pages
              interactive and dynamic.
            </Box>
            <Box mt={"30px"}>
              ReactJS is a JavaScript library used to build user interfaces (UI)
              for web applications.
            </Box>
          </MotionBox>{" "}
        </Center>
      </Center>

      <Center
        fontSize={"20px"}
        fontWeight={"bold"}
        fontFamily={"serif"}
        mt={"40px"}
      >
        PORTFOLIO
      </Center>
      <Center mt={"40px"} fontSize={"15px"} fontWeight={"bold"}>
        #MMS Daily Apparel Store
      </Center>
      <Center>
        <Center gap={"50px"} bgColor={"#F2F1EB"} w={"1500px"} mt={"20px"}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            textAlign={"center"}
            w={"600px"}
          >
            <Image borderRadius={"12px"} w={"600px"} h={"auto"} src={mms} />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            w={"500px"}
            h={"auto"}
          >
            <Box>
              Build an on-demand web-based platform for e-commerce that uses
              more than one warehouse to store its goods.
            </Box>
            <Box mt={"30px"}>
              Responsible to create user landing page, admin dashboard, change &
              reset password, update profile picture, upload payment proof, CRUD
              category data, and create branch
            </Box>
          </MotionBox>
        </Center>
      </Center>
      <Center>
        <Center
          gap={"10px"}
          bgColor={"#F2F1EB"}
          w={"1500px"}
          flexDir={"column"}
        ></Center>
      </Center>

      <Center
        mt={"40px"}
        fontSize={"20px"}
        fontWeight={"bold"}
        fontFamily={"serif"}
      >
        CONTACS
      </Center>
      <Center>
        <Center
          gap={"10px"}
          bgColor={"#F2F1EB"}
          w={"1500px"}
          flexDir={"column"}
          mt={"40px"}
        >
          <MotionBox>Let's collaborate with us as a team </MotionBox>
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
      <Center>
        <Image h={"250px"} w={"auto"} src={ty} />
      </Center>
      <Center mb={"20px"} mt={"30px"}>
        © 2023 maulana
      </Center>
      {/* Other sections with animations */}
    </>
  );
}
