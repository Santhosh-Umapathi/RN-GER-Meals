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

import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-navigation";
import { Colors } from "../constants";

const MealDetailScreen = (props) => {
  const { navigation } = props;

  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.foot}>
        <Text style={styles.footText}>{selectedMeal.durations}</Text>
        <Text style={styles.footText}>{selectedMeal.complexity}</Text>
        <Text style={styles.footText}>{selectedMeal.affordability}</Text>
      </View>
      <Text style={styles.head}>Ingredients</Text>
      {selectedMeal.ingredients.map((item) => {
        return (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        );
      })}
      <Text style={styles.head}>Steps</Text>
      {selectedMeal.steps.map((item) => {
        return (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (props) => {
  const { navigation } = props;

  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButton onPress={() => {}} iconName="star-outline" />,
  };
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "green",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    margin: 10,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "space-between",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  root: {
    flex: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
  },
  foot: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "flex-end",
  },
  head: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginVertical: 5,
  },
  footText: {
    color: "white",
    fontSize: 15,
    fontFamily: "open-sans",
    textAlign: "center",
    flex: 1,
  },

  image: {
    width: "100%",
    height: 200,
  },
  listItem: {
    padding: 5,
    margin: 20,
    borderLeftWidth: 1,
    borderLeftColor: Colors.accentColor,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
});

export default MealDetailScreen;
