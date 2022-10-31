import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Progress from "react-native-progress";
import { XMarkIcon } from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";
export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View
      class="flex-1"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        paddingTop: 15,
        left: 0,
        right: 0,
        backgroundColor: "#00CCBB",
      }}
    >
      <SafeAreaView className="z-50">
        <View
          className="flex-row"
          style={{
            justifyContent: "space-between",
            padding: 16,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light" style={{ color: "white", fontSize: 16 }}>
            Order help
          </Text>
        </View>

        <View
          className="shadow-md"
          style={{
            backgroundColor: "white",
            marginLeft: 10,
            marginRight: 10,
            padding: 16,
            zIndex: 50,
            borderRadius: 10,
          }}
        >
          <View
            className="flex-row"
            style={{ justifyContent: "space-between" }}
          >
            <View>
              <Text className="text-gray-400" style={{ fontSize: 15 }}>
                Estimated Arrival
              </Text>
              <Text className="text-4xl" style={{ fontWeight: "bold" }}>
                45-55 Minutes
              </Text>
            </View>

            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              style={{ width: 65, height: 65 }}
            />
          </View>
          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
          <Text className="text-gray-500" style={{ marginTop: 16 }}>
            Your order at {restaurant.title} is being prepared{" "}
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        className="flex-1"
        style={{ marginTop: -28, zIndex: 0 }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          pinColor="#00CCBB"
          identifier="origin"
        />
      </MapView>

      <SafeAreaView
        className="space-x-5"
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          height: 80,
        }}
      >
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="bg-gray-300"
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            padding: 10,
            marginLeft: 13,
          }}
        />

        <View className="flex-1">
          <Text className="text-lg">Stéphane Ngoyi</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text
          className="text-[#00CCBB]"
          style={{ fontSize: 15, fontWeight: "bold", marginRight: 13 }}
        >
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
}
