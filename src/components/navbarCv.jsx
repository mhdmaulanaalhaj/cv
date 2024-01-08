import { Box, Center, Image } from "@chakra-ui/react";

export default function NavCv() {
  return (
    <>
      <Box
        cursor={"pointer"}
        mb={"20px"}
        ml={"10px"}
        mr={"10px"}
        w={"auto"}
        h={"40px"}
        display={"flex"}
        justifyContent={"space-between"}
        textAlign={"center"}
        borderBottom={"1px"}
      >
        <Box>
          <Image
            w={"40px"}
            h={"40px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxhqrozkk6UCI_u25ocCyK8UV9QOvx6EfSA&usqp=CAU"
          />
        </Box>
        <Box
          cursor={"pointer"}
          color={"maroon"}
          display={"flex"}
          gap={"20px"}
          alignItems={"center"}
          // textAlign={"center"}
        >
          <Box>ABOUT</Box>
          <Box>SKILLS</Box>
          <Box>PORTFOLIO</Box>
          <Box>CONTACT</Box>
        </Box>
      </Box>
    </>
  );
}
