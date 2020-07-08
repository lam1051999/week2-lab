import React from "react";
import { View, Image, FlatList, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AppStyles as styles } from "./constants/Styles";
import Post from "./Post";

const images = [
  {
    id: 1,
    name: "tranlam",
    image: require("./assets/1.jpeg"),
    likeCount: 128,
    avatar: require("./assets/avatar1.jpeg"),
  },
  {
    id: 2,
    name: "vunam",
    image: require("./assets/2.jpeg"),
    likeCount: 128,
    avatar: require("./assets/avatar2.jpg"),
  },
  {
    id: 3,
    name: "lananh",
    image: require("./assets/3.jpeg"),
    likeCount: 128,
    avatar: require("./assets/avatar3.jpg"),
  },
  {
    id: 4,
    name: "trancong",
    image: require("./assets/4.jpeg"),
    likeCount: 128,
    avatar: require("./assets/avatar4.jpg"),
  },
  {
    id: 5,
    name: "hieuvu",
    image: require("./assets/5.jpeg"),
    likeCount: 128,
    avatar: require("./assets/avatar5.jpg"),
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f3f6fa" style="dark" />
      <View style={styles.headerContainer}>
        <Image
          source={require("./assets/instagram.png")}
          style={styles.instagramImage}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => item.id + index + "index"}
        renderItem={({ item }) => <Post item={item} />}
      />
    </SafeAreaView>
  );
}
