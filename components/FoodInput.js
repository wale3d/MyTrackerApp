import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import database from "../config";

const FoodInput = (props) => {
  const [foodItem, onChangeFoodItem] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  const saveToDb = () => {
    const nowDate = new Date().toISOString();
    const currentDate = nowDate.substring(0, 10);
    const currentTime = nowDate.substring(11, 19);

    database
      .ref("food/" + currentDate.substring(0, 10))
      .child(currentTime)
      .set({
        foodItem: foodItem,
        quantity: number,
      });

    props.navigation.navigate("foodList");
  };

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFoodItem}
        value={foodItem}
        placeholder="Enter what you just ate."
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Quantity."
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={saveToDb} />
    </>
  );
};

export default FoodInput;
