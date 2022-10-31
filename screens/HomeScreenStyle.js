import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

export const HomeScreenStyle = StyleSheet.create({
  main: {
    overflowX: "hidden",
    width: width,
  },
  textXs: {
    fontSize: 13,
    lineHeight: 15,
  },
  flexRow: {
    diplay: "flex",
    flexDirection: "row",
  },
  textXl: {
    fontSize: 18,
    lineHeight: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
  textGray: {
    color: "rgba(156, 163, 175, 9)",
  },
  mx4: {
    marginLeft: 7,
    marginRight: 7,
  },
});

export const headView = StyleSheet.create({
  flexRowCenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerView: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageLogo: {
    width: 40,
    height: 40,
  },
  textHeader: {},
});

export const SeachViewStyle = StyleSheet.create({
  seacchForm: {
    // ...headView.flexRowCenter,
    padding: 10,
    paddingRight: 0,
    backgroundColor: "rgb(229, 231, 235)",
  },
  inputStyle: {
    border: "none",
  },
  searchView: {
    ...headView.flexRowCenter,
  },
});
