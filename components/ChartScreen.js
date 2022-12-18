import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
} from "victory-native";
import database from "../config";

const ChartScreen = () => {
  const data = [
    {
      date: new Date("2022-12-10"),
      weight: 123,
    },
    {
      date: new Date("2022-12-11"),
      weight: 110,
    },
    {
      date: new Date("2022-12-12"),
      weight: 143,
    },
    {
      date: new Date("2022-12-13"),
      weight: 176,
    },
    {
      date: new Date("2022-12-14"),
      weight: 167,
    },
    {
      date: new Date("2022-12-15"),
      weight: 300,
    },
  ];

  const getData = () => {
    const dbRef = database.ref();
    dbRef
      .child("weights")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(snapshot.val());
          setDataForChart(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const setDataForChart = (values) => {
    const data = [values];
  };

  return (
    <View>
      {getData()}
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine data={data} x="date" y="weight" interpolation="natural" />
      </VictoryChart>
    </View>
  );
};

export default ChartScreen;
