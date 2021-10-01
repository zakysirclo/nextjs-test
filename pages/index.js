import * as React from "react";
import CategoryList from "../src/components/CategoryList.js";

export default function Index({ categories }) {
  return <CategoryList categories={categories} />;
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categories: data.categories,
    },
  };
}
