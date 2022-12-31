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
    const nowDate = new Date().toISOString();
    const currentDate = nowDate.substring(0, 10);
    const currentTime = nowDate.substring(11, 19);
    database
      .ref("weights/" + currentDate.substring(0, 10))
      .child(currentTime)
      .set({
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
