import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import navigationStrings from "../../constants/navigationStrings";

const ProblemOverview = (props) => {
  const {
    center,
    alarm,
    history,
    date,
    navigation,
    description,
    image,
    stepsTaken,
  } = props;

  const showDetails = () => {
    navigation.navigate(navigationStrings.PROBLEMDETAILS, {
      center,
      alarm,
      history,
      date,
      description,
      image,
      stepsTaken,
    });
  };
  return (
    <TouchableOpacity style={styles.problemOverview} onPress={showDetails}>
      <Text style={styles.problemCenter}>{center.toUpperCase()}</Text>
      <View style={styles.problemRowDiv}>
        <View>
          <Text style={styles.problemOverviewText}>Alerm: {alarm}</Text>
          <Text style={styles.problemOverviewText}>Time: {date}</Text>
          <Text style={styles.problemOverviewText}>History: {history}</Text>
        </View>
        <View style={styles.iconStyle}>
          <AntDesign name="arrowright" size={24} color="#494d4b" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  problemOverview: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    // alignItems: "center",
  },
  problemCenter: {
    color: "#494d4b",
    fontSize: 16,
    fontWeight: "bold",
    padding: 3,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  problemRowDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  problemOverviewText: {
    fontWeight: "bold",
    padding: 1.5,
    color: "#808080",
    fontSize: 15,
    marginLeft: 3,
  },
  iconStyle: {
    justifyContent: "center",
    marginRight: 3,
    marginBottom: 18,
  },
});

export default ProblemOverview;
