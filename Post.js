import React from "react";
import { Text, View, Image, Alert } from "react-native";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { PostStyles as styles } from "./constants/Styles";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants/Constants";

export default function Post({ item }) {
  return (
    <>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarWrapper}>
          <Image source={item.avatar} style={styles.avatar} />
        </View>
        <Text style={styles.avatarName}>{item.name}</Text>
      </View>
      <View
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT * 0.5,
        }}
      >
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.actionIconsContainer}>
        <AntDesign
          name="hearto"
          size={25}
          color="black"
          onPress={() =>
            Alert.alert("Like?", "Do you want to like this image?", [
              {
                text: "OK",
                onPress: () => console.log("Liked"),
                style: "default",
              },
              {
                text: "Cancel",
                style: "destructive",
                onPress: () => console.log("Canceled"),
              },
            ])
          }
        />
        <MaterialCommunityIcons
          name="chat-outline"
          size={25}
          color="black"
          style={styles.actionIcon}
          onPress={() =>
            Alert.alert("Message?", "Do you want to send message?", [
              {
                text: "OK",
                onPress: () => console.log("Sent"),
                style: "default",
              },
              {
                text: "Cancel",
                style: "destructive",
                onPress: () => console.log("Canceled"),
              },
            ])
          }
        />
        <Feather
          name="share"
          size={25}
          color="black"
          style={styles.actionIcon}
          onPress={() =>
            Alert.alert("Share?", "Do you want to share this image?", [
              {
                text: "OK",
                onPress: () => console.log("Shared"),
                style: "default",
              },
              {
                text: "Cancel",
                style: "destructive",
                onPress: () => console.log("Canceled"),
              },
            ])
          }
        />
      </View>
      <View style={styles.likeIconContainer}>
        <AntDesign name="heart" size={25} color="black" />
        <Text style={styles.likeText}>{item.likeCount} likes</Text>
      </View>
    </>
  );
}
