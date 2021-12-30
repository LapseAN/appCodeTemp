import React from "react";
import { View, Text } from "react-native";

const About = (props) => {
  console.log(props);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About</Text>
    </View>
  );
};

export default About;
