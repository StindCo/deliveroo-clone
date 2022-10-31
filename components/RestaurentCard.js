import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RestaurentCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow"
      style={[
        Platform.select({
          web: {
            backgroundColor: "#fff",
            marginRight: 12,
            shadowColor: "#eee",
            shadowOffset: {
              width: 1,
              height: 1,
            },
          },
        }),
      ]}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{
          width: 260,
          height: 180,
        }}
        className="rounded-sm"
      />
      <View className="px-3 pb-4" style={styles.containerView}>
        <Text className="font-bold text-lg pt-2" style={styles.title}>
          {title}
        </Text>
        <View className="flex-row items-center space-x-1" style={styles.sub}>
          <StarIcon color={"green"} size={22} opacity={0.5} />
          <Text className="text-xs text-gray-500" style={styles.subOfSub}>
            <Text className="text-green-500">{rating}</Text> ⋅ {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1" style={styles.sub}>
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500" style={styles.subOfSub}>
            Nearby ⋅ {address}{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerView: [
    Platform.select({
      web: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 10,
      },
    }),
  ],
  sub: [
    Platform.select({
      web: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 4,
      },
    }),
  ],
  subOfSub: [
    Platform.select({
      web: {
        fontSize: 13,
        color: "gray",
      },
    }),
  ],
  title: [
    Platform.select({
      web: {
        fontWeight: "bold",
        paddingTop: 8,
        fontSize: 16,
      },
    }),
  ],
});
