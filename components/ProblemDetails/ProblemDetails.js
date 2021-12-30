import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import navigationStrings from "../../constants/navigationStrings";

const ProblemDetails = (props) => {
  const { center, alarm, history, date, description, image, stepsTaken } =
    props.route.params;
  console.log(navigation);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
            <Text style={styles.title}>Alarm:</Text> {alarm}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.title}>Date:</Text> {date}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.title}>Problem History:</Text> {history}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.title}>Description:</Text> {description}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.title}>Steps taken by the engineer:</Text>{" "}
          </Text>
          {stepsTaken.map((step) => (
            <Text style={styles.text}>=>{step}</Text>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(navigationStrings.BIDDINGREQUEST)}
        >
          <Text style={styles.buttonTitle}>BID</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 30,
    backgroundColor: "#f0c0ad",
    paddingTop: 5,
  },
  innerContainer: {
    marginTop: 10,
    width: "95%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    marginBottom: 5,
  },
  image: {
    width: "95%",
    height: 300,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#4d4a4a",
  },
  title: {
    textDecorationLine: "underline",
  },
  button: {
    height: 60,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "crimson",
    borderRadius: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ProblemDetails;
