import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
  Platform,
} from "react-native";
import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const { navigation } = props;

  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealList navigation={navigation} data={favMeals} />;
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
