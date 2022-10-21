import { StyleSheet } from "react-native";

export const HomeScreenStyle = StyleSheet.create({
  main: {
    overflowX: "hidden",
    width: "100%",
  },
  textXs: {
    fontSize: "0.75rem",
    lineHeight: "1.5rem",
  },
  flexRow: {
    diplay: "flex",
    flexDirection: "row",
  },
  textXl: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  textBold: {
    fontWeight: 700,
  },
  textGray: {
    color: "rgba(156, 163, 175, 9)",
  },
  mx4: {
    marginLeft: "1rem",
    marginRight: "1rem",
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
    paddingTop: "0.35rem",
    paddingBottom: "0.75rem",
    paddingLeft: "0.35rem",
    paddingRight: "0.35rem",
  },
  imageLogo: {
    width: "2.5rem",
    height: "2.5rem",
  },
  textHeader: {},
});

export const SeachViewStyle = StyleSheet.create({
  seacchForm: {
    // ...headView.flexRowCenter,
    padding: "0.75rem",
    backgroundColor: "rgb(229, 231, 235)",
  },
  inputStyle: {
    outline: "none",
    border: "none",
  },
  searchView: {
    ...headView.flexRowCenter,
  },
});
