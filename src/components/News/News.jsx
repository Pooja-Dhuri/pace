import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import style from "./News.module.css";

const News = () => {
  return (
    <Box classname={style.topheading}>
      <marquee behavior="scroll" direction="left to right">
        Pocketful news headlines and details
      </marquee>

      <Box className={style.newsbox}>
        <Grid
          h="500px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(6, 1fr)"
          w="100%"
          gap={4}
        >
          <GridItem rowSpan={3} colSpan={3}>
             <Image/>
             <h1></h1>
             <p></p>
          </GridItem>
          <GridItem colSpan={3} >

          </GridItem>
          <GridItem colSpan={3} bg="papayawhip"></GridItem>
          <GridItem colSpan={3} bg="tomato" ></GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default News;
