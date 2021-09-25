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
import { Colors } from "../constants";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  const filteredCategories = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );
  console.log(
    "🚀 --- CategoryMealScreen --- filteredCategories",
    filteredCategories
  );

  return (
    <View style={styles.containerView}>
      <FlatList
        data={filteredCategories}
        // keyExtractor={key => key.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
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

export default CategoryMealScreen;