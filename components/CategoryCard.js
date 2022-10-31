import { Image, TouchableOpacity, View, Text } from "react-native";
import React from "react";

export default function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity style={{marginRight: 8, position: "relative"}}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="rounded"
        style={{
          height: 80,
          width: 80,
        }}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 5,
          left: 5,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {" "}
        {title}
      </Text>
    </TouchableOpacity>
  );
}
