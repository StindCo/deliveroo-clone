import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectBacketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";

export default function BasketIcon() {
  const items = useSelector(selectBacketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length == 0) return null;
  return (
    <View
      className="absolute"
      style={{ bottom: 40, width: "100%", zIndex: 50 }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5"
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#00CCBB",
          padding: 13,
        }}
      >
        <Text
          style={{
            backgroundColor: "#01A296",
            color: "white",
            fontSize: 18,
            paddingLeft: 7,
            paddingRight: 7,
            fontWeight: "bold",
            paddingTop: 3,
            paddingBottom: 3,
          }}
        >
          {items.length}
        </Text>
        <Text
          className="flex-1"
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          View Basket
        </Text>
        <Text
          className="font-extrabold"
          style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
        >
          <Currency quantity={basketTotal} currency="EUR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
