import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToWeightInputScreen = () => {
    this.props.navigation.navigate("weightInput");
  };

  navigateToChartScreen = () => {
    this.props.navigation.navigate("chart");
  };

  navigateToFoodInputScreen = () => {
    this.props.navigation.navigate("foodInput");
  };

  navigateToFoodListScreen = () => {
    this.props.navigation.navigate("foodList");
  };

  render() {
    return (
      <>
        <Button
          onPress={this.navigateToWeightInputScreen}
          title="Enter todays Weight"
        />
        <Button
          onPress={this.navigateToChartScreen}
          title="Check out progress"
        />
        <Button
          onPress={this.navigateToFoodInputScreen}
          title="Enter Food Eaten"
        />
        <Button
          onPress={this.navigateToFoodListScreen}
          title="Check out food list"
        />
      </>
    );
  }
}

export default Main;
