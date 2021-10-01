import * as React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Head from "next/head";
import ReactPlayer from "react-player";

export default function MealDetail({ meal }) {
  console.log(meal);

  let items = [];

  // handle ingredient => karena key ingredientnya tidak teratur isinya dari API
  for (let i = 1; i <= 20; i++) {
    if (
      meal[`strIngredient${i}`] !== null &&
      meal[`strIngredient${i}`] !== ""
    ) {
      items.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

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
              <Typography variant="body1" component="div" align="center">
                Tags : {meal.strTags}
              </Typography>
              <Typography variant="body2" component="div" align="center">
                Category : {meal.strCategory}
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Container sx={{ my: "3rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Ingredients
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width={50}>No.</TableCell>
                  <TableCell align="left">Ingredient</TableCell>
                  <TableCell align="left">Measure</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" width={50}>
                      {index + 1}.
                    </TableCell>
                    <TableCell align="left">{item.ingredient}</TableCell>
                    <TableCell align="left">{item.measure}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        <div style={{ margin: "3rem 0" }}>
          <ReactPlayer
            url={meal.strYoutube}
            width="100%"
            height={400}
            playing={false}
          />
        </div>
      </Container>
    </>
  );
}
