import React from "react";

import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const filteredCategories = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList data={filteredCategories} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
