import React from "react";

import { useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const { navigation } = props;
  const state = useSelector((state) => state.meals);

  return <MealList navigation={navigation} data={state.favoriteMeals} />;
};

FavoritesScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Your Favorites !",
    headerLeft: (
      <HeaderButton
        iconName="ios-menu"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
    ),
  };
};

export default FavoritesScreen;
