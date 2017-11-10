import React, { Component } from "react";
import { View } from "react-native";
import TabIcon from "../navigation/components/styled/TabIcon";

export default class SettingsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: ({ focused, tintColor }) => (
      <TabIcon
        focused={focused}
        tintColor={tintColor}
        source={require("../assets/images/icon-settings.png")}
      />
    )
  };

  render() {
    return <View style={{ flex: 1, backgroundColor: "papayawhip" }} />;
  }
}
