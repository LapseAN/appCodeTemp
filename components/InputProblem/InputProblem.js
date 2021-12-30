import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InputProblem = () => {
  return (
    <View style={styles.container}>
      <Text>This is input Problem Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputProblem;
