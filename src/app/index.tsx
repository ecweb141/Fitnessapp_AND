import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodListItem from "../components/foodItem";

export const FoodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Apple", cal: 75, brand: "Generic" },
  { label: "macBurger", cal: 75, brand: "McDonalds" },
];
const index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={FoodItems}
        renderItem={({ item }: any) => (
          <FoodListItem label={item.label} brand={item.brand} cal={item.cal} />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
});
