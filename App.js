import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "./config";

import Main from "./components/main";
import WeightInput from "./components/WeightInput";
import ChartScreen from "./components/ChartScreen";
import FoodInput from "./components/FoodInput";
import FoodList from "./components/FoodList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="weightInput" component={WeightInput} />
        <Stack.Screen name="foodInput" component={FoodInput} />
        <Stack.Screen name="chart" component={ChartScreen} />
        <Stack.Screen name="foodList" component={FoodList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
