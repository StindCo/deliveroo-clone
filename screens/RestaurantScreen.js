import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();
  React.useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView className="pb-36">
        <View style={{ position: "relative" }}>
          <Image
            className="w-full"
            source={{ uri: imgUrl }}
            style={{
              backgroundColor: "rgb(209, 213, 219)",
              height: 230,
              padding: 16,
              width: "100%",
            }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full"
            style={{
              position: "absolute",
              top: 40,
              left: 15,
              padding: 7,
              backgroundColor: "rgb(209, 213, 219)",
            }}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View
          className="bg-white"
          style={{ paddingTop: 16, paddingLeft: 0, paddingRight: 0 }}
        >
          <View className="px-4" style={{ fontWeight: "bold" }}>
            <Text className="text-3xl">{title}</Text>
            <View
              className="flex-row"
              style={{
                alignItems: "center",
                marginRight: 4,
                marginTop: 3,
                marginBottom: 3,
              }}
            >
              <View
                className="flex-row"
                style={{
                  marginLeft: 4,
                  alignItems: "center",
                  marginRight: 4,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              >
                <StarIcon color="green" opacity={0.3} size={22} />
                <Text
                  className="text-xs text-gray-500"
                  style={{
                    marginLeft: 3,
                    fontSize: 12,
                    Color: "rgba(107,114,128, 0.7)",
                  }}
                >
                  <Text className="text-green-500">{rating}</Text> ⋅ {genre}
                </Text>
              </View>

              <View
                className="flex-row"
                style={{
                  marginLeft: 4,
                  alignItems: "center",
                  marginRight: 4,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              >
                <MapPinIcon color="gray" opacity={0.3} size={22} />
                <Text
                  className="text-xs text-gray-500"
                  style={{
                    marginLeft: 3,
                    fontSize: 12,
                    Color: "rgba(107,114,128, .7)",
                  }}
                >
                  <Text>Nearby </Text> ⋅ {address}
                </Text>
              </View>
            </View>
            <Text
              className="text-gray-500"
              style={{ marginTop: 5, paddingBottom: 10 }}
            >
              {short_description}
            </Text>
          </View>
          <TouchableOpacity
            className="border-y"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              marginTop: 10,
              borderColor: "rgba(202,202, 202, 0.5)",
              justifyContent: "space-between",
            }}
          >
            <View className="items-center" style={{ flexDirection: "row" }}>
              <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20} />
              <Text
                className="pl-2"
                style={{ fontSize: 15, fontWeight: "bold" }}
              >
                Have a food allergy ?
              </Text>
            </View>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View class="px-4">
          <Text
            className="px-4"
            style={{
              paddingTop: 16,
              marginBottom: 10,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Menu
          </Text>

          {dishes.map((dish) => (
            <DishRow
              key={dish.id}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.shortDescription}
              image={dish.image?.url}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
