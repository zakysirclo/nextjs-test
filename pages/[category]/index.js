import * as React from "react";
import MealList from "../../src/components/MealList.js";

export default function Category({ meals, category }) {
  return <MealList meals={meals} category={category} />;
}

export async function getServerSideProps(context) {
  const { category } = context.params;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await res.json();

  if (!data || data.meals === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meals: data.meals,
      category,
    },
  };
}
