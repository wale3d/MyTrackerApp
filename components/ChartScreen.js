import React, { Component, useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLine,
} from "victory-native";
import database from "../config";

const ChartScreen = () => {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const setDataForChart = (values) => {
    let dataL = [];
    if (values) {
      Object.keys(values).forEach((date) => {
        Object.keys(values[date]).forEach((time) => {
          dataL.push({
            date: new Date(date + "T" + time + "Z"),
            weight: parseInt(values[date][time].weight),
          });
        });
      });
    }

    return dataL;
  };

  const getData = () => {
    const dbRef = database.ref();
    dbRef
      .child("weights")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          let values = snapshot.val();
          setValues(values);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          data={setDataForChart(values)}
          x="date"
          y="weight"
          interpolation="natural"
        />
      </VictoryChart>
    </View>
  );
};

export default ChartScreen;
