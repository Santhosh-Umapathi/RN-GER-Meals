import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.containerView}>
      <FlatList
        data={props.data}
        // keyExtractor={key => key.id}
        renderItem={({ item }) => {
          return (
            <MealItem
              item={item}
              onPress={() => {
                navigation.navigate("MealDetail", {
                  mealId: item.id,
                  mealTitle: item.title,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MealList;
