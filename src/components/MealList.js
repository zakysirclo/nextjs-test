import * as React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MealList({ meals, category }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{category} - Meal List</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container>
        <Typography variant="h4" align="center" sx={{ margin: "1rem 0" }}>
          {category} Meal List
        </Typography>
        <Grid container spacing={2}>
          {meals.map((meal, index) => (
            <Grid
              item
              sx={{ cursor: "pointer" }}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={meal.idMeal}
            >
              <Card
                onClick={() =>
                  router.push(
                    "[category]/[idMeal]",
                    `${category}/${meal.idMeal}`
                  )
                }
              >
                <CardActionArea>
                  <Box sx={{ height: 250 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" align="center">
                        {meal.strMeal}
                      </Typography>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
