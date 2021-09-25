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
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const { navigation } = props;

  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  return (
    <View style={styles.containerView}>
      <Text style={styles.text}>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (props) => {
  const { navigation } = props;

  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default MealDetailScreen;
