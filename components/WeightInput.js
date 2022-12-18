import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import database from "../config";

const WeightInput = (props) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  const [number, onChangeNumber] = React.useState(null);

  const saveToDb = () => {
    const currentDate = new Date().toISOString().substring(0, 10);
    console.log(currentDate);
    database.ref("date/" + currentDate).set({
      weight: number,
    });

    props.navigation.navigate("chart");
  };

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Todays Weight (will consider currrent time)"
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={saveToDb} />
    </>
  );
};

export default WeightInput;
