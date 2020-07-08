import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./Constants";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f6fa",
    justifyContent: "space-between",
    paddingRight: 10,
    height: 60,
  },
  instagramImage: {
    flex: 1,
    height: 45,
    width: null,
    transform: [
      {
        translateX: 22.5,
      },
    ],
  },
});

export const PostStyles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    zIndex: 1,
  },
  avatarWrapper: {
    width: 50,
    height: 50,
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 30,
  },
  avatarName: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.5,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },
  actionIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    zIndex: 1,
  },
  actionIcon: {
    marginLeft: 10,
  },
  likeIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    zIndex: 1,
  },
  likeText: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
