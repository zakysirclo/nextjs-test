import * as React from "react";
import MealDetail from "../../src/components/MealDetail.js";

export default function Meal({ meal }) {
  return <MealDetail meal={meal} />;
}

export async function getServerSideProps(context) {
  const { category, idMeal } = context.params;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await res.json();

  if (!data || data.meals === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meal: data.meals[0],
      category,
    },
  };
}
