import { Image, View, Text, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBacketItems,
  selectBasketItemsWithid,
  removeFromBasket,
} from "../features/basketSlice";

export default function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = React.useState(false);
  const items = useSelector((state) => selectBasketItemsWithid(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white"
        style={[
          {
            padding: 15,
            borderWidth: 1,
            borderColor: "rgba(220,220,215, 0.5)",
          },
          isPressed && { borderBottomColor: "#fff", borderBottomWidth: 0 },
        ]}
      >
        <View className="flex-row">
          <View className="flex-1" style={{ paddingRight: 8 }}>
            <Text className="text-lg" style={{ marginBottom: 10 }}>
              {name}
            </Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400" style={{ marginTop: 8 }}>
              <Currency quantity={parseFloat(price)} currency="EUR" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                height: 80,
                width: 80,
                padding: 16,
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="bg-gray-300"
              source={{
                uri: image,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="p-3" style={{ backgroundColor: "#fff" }}>
          <View
            className="pb-0"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
              className="mx-2"
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text className="mx-2">{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket} className="mx-2">
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
