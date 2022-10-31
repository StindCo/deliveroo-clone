import { SafeAreaView, Image, View, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import imageGif from "../assets/image.gif";

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, [navigation]);
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00CCBB",
      }}
    >
      <View
        className="rounded-full"
        style={{
          height: 200,
          width: 200,
          backgroundColor: "white",
          padding: 15,
          borderRadius: 230,
        }}
      >
        <Image
          source={require("../assets/3.jpg")}
          className="scale-x-95"
          style={{
            height: 170,
            width: 170,
            borderRadius: 170,
          }}
        />
      </View>

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg"
        style={{
          fontWeight: "bold",
          color: "white",
          width: 300,
          marginTop: 80,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        Waiting for Restaurant to accept your order.
      </Animatable.Text>

      <Progress.Bar
        progress={0.7}
        width={250}
        indeterminateAnimationDuration={2000}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
}
