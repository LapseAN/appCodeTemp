import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import navigationStrings from "../../constants/navigationStrings";

import { ProblemOverview } from "../../components";

const Home = (props) => {
  const { navigation } = props;
  console.log(navigation);
  // const moveForward = () => {
  //   navigation.navigate(navigationStrings.PROBLEMDETAILS);
  // };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(navigationStrings.INPUTPROBLEM)}
        >
          <Text style={styles.buttonTitle}>Problem?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(navigationStrings.PROBLEMONPROCESS)
          }
        >
          <Text style={styles.buttonTitle}>On Process</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.onlineTitle}>Problems Online</Text>

      <View style={styles.problemContainer}>
        <ScrollView
          style={styles.problemContainerInner}
          showsVerticalScrollIndicator={false}
        >
          <ProblemOverview
            center="Barishal Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Bogura Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Noakhali Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Patuakhai Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Feni Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Chattagram Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Lalmonirhat Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>

          <ProblemOverview
            center="Jessore Center"
            alarm="Beeping on the motherboard"
            date="11:30 03-05-2021"
            history="Happened three times"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!"
            image="https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png"
            stepsTaken={["Changed fluid", "Washed motherboard"]}
            navigation={navigation}
          ></ProblemOverview>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "85%",
    marginTop: 30,
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
  onlineTitle: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fc4a03",
  },
  problemContainer: {
    width: "95%",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#f0c0ad",
    alignItems: "center",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },

  problemContainerInner: {
    width: "95%",
    paddingTop: 10,
  },
});

export default Home;
