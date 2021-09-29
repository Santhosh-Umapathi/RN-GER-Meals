import { Ionicons } from "@expo/vector-icons";

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

const HeaderButton = ({ onPress = () => {} }) => {
  return (
    <Ionicons
      name="star-outline"
      size={25}
      color={Platform.OS === "android" ? "#fff" : Colors.primaryColor}
      style={{ paddingHorizontal: 10 }}
      onPress={onPress}
    />
  );
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

export default HeaderButton;
