import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./News.module.css";
import newsData from "./data";
import { useState } from "react";
import axios from "axios";

const News = () => {
  const [everything, setEverything] = useState();

  const getData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=98582e0b983c4f79a50896d105d214ff"
      )
      .then((res) => {
        console.log(res.data.articles);
        setEverything(res.data.articles);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box classname={style.topheading}>
      <marquee behavior="scroll" direction="left to right" className={style.everything_heading}>
        Pocketful news headlines and details
      </marquee>

      {/* topheadlines box */}
      <Box className={style.newsbox}>
        <Grid
          h="450px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(6, 1fr)"
          w="100%"
          gap={4}
          className={style.singlenews_content}
        >
          <GridItem rowSpan={3} colSpan={3}className={style.topnewsbox}>
            <Box><Image  src="https://fdn.gsmarena.com/imgroot/news/22/12/apple-music-sing/-952x498w6/gsmarena_000.jpg" />
            <h1 className={style.newsheading}>NDTV News</h1>
            <p className={style.newspara}>
              Today Apple unveiled a new feature that's coming to its Apple
              Music streaming service \"later this month\". It's called Apple
              Music Sing and will be available to all Apple Music subscribers
              worldwide, … [+1140 chars]
            </p>
            </Box>
          </GridItem>
          {newsData.map((e) => (
            <GridItem colSpan={3} rowSpan={1}>
              <Flex gap="20px">
                <Box>
                  <Image src={e.url} width="500px" height="100px" />
                </Box>
                <Box>
                  <h1 className={style.newsheadingright}>{e.name}</h1>
                  <p className={style.newspararight}>{e.content}</p>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>


      {/* everything */}
      <Box className={style.everything_box}>
        <h1 className={style.everything_heading}>Everything</h1>
        <hr className={style.horizontalline}/>
        <Grid templateRows="auto" 
        templateColumns="repeat(3, 1fr)" gap="30px"className={style.multienews_content}>
          {everything &&
            everything.map((ever) => (
              <GridItem borderRadius="15px" border="1px solid grey"padding={"20px"}>
                <Box className={style.newsImageBox}><Image className={style.newsImage} src={ever.urlToImage} /></Box>
                <h1 className={style.newsheading}>{ever.title}</h1>
                <p className={style.newsparabottom}>{ever.description}</p>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default News;
