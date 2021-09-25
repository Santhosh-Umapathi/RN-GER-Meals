import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const renderItem = ({ item, index }) => {
    return (
      <CategoryGridItem
        item={item}
        onPress={() => {
          navigation.navigate("CategoryMeal", {
            categoryId: item.id,
          });
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItem} />;
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meals Category",
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

export default CategoriesScreen;
