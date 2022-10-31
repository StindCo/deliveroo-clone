import { ScrollView, View, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { getCategories } from "../models/Category";

export default function Categories() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getCategories().then(({ menuCategories }) => setCategories(menuCategories));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          title={category.title}
          imgUrl={category?.image.url}
        />
      ))}
    </ScrollView>
  );
}
