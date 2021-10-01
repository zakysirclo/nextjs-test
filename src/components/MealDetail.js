import * as React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import Head from "next/head";
import ReactPlayer from "react-player";

export default function MealDetail({ meal }) {
  console.log(meal);
  return (
    <>
      <Head>
        <title>{meal.strMeal} - Meal Detail</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ margin: "1rem 0" }}>
          {meal.strMeal}
        </Typography>

        <Card>
          <Box>
            <CardMedia
              component="img"
              width="500"
              height="500"
              image={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <CardContent>
              <Typography variant="h6" component="div" align="center">
                {meal.strMeal}
              </Typography>
            </CardContent>
            {/* <CardMedia
              component="iframe"
              height="300"
              src={meal.strYoutube}
              title={meal.strMeal}
            /> */}
            {/* <CardMedia
              component="iframe"
              height="300"
              src={meal.strYoutube}
              alt={meal.strMeal}
            /> */}
          </Box>
        </Card>
        <div style={{ margin: "3rem 0" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height={400}
            playing={false}
          />
        </div>
      </Container>
    </>
  );
}
