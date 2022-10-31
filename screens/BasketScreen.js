import {
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  selectBacketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBacketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView
      className="flex-1"
      style={[
        { backgroundColor: "#fff", marginTop: 10 },
        Platform.select({ android: { marginTop: 50 } }),
      ]}
    >
      <View
        className="flex-1"
        style={{ backgroundColor: "rgba(232,232,232, 0.9)" }}
      >
        <View
          className="shadow-xl"
          style={{
            padding: 14,
            borderBottomColor: "#00CCBB",
            backgroundColor: "white",
          }}
        >
          <View>
            <Text
              className="text-lg"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Basket
            </Text>
            <Text className="text-gray-400" style={{ textAlign: "center" }}>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full"
            style={{
              position: "absolute",
              top: 15,
              right: 8,
              backgroundColor: "#eee",
            }}
          >
            <XCircleIcon color="#00CCBB" height={45} width={45} />
          </TouchableOpacity>
        </View>
        <View
          className="space-x-4"
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 8,
            marginBottom: 8,
            backgroundColor: "#fff",
          }}
        >
          <Image
            className="rounded-full"
            source={{
              uri: "https://media.graphassets.com/oTx511CqTeON2YDlDnD0",
            }}
            style={{ height: 40, width: 40, padding: 8 }}
          />
          <Text className="flex-1" style={{ marginLeft: 15, marginRight: 15 }}>
            Deliver in 50-75 min
          </Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView  style={{ borderColor: "#eee" }}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="space-x-2"
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingLeft: 12,
              }}
            >
              <Text
                className="text-[#00CCBB]"
                style={{
                  marginLeft: 3,
                  marginRight: 3,
                }}
              >
                {items.length} x
              </Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="rounded-full"
                style={{
                  height: 35,
                  width: 35,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text
                className="text-gray-600"
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <Currency quantity={items[0]?.price} currency="EUR" />
              </Text>

              <TouchableOpacity
                style={{ marginLeft: 7, marginRight: 7 }}
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text
                  className="text-xs"
                  style={{ color: "#00CCBB", marginLeft: 3, marginRight: 3 }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View
          className="space-y-4"
          style={{ padding: 16, backgroundColor: "white", marginTop: 15 }}
        >
          <View
            className="justify-between"
            style={{ flexDirection: "row", marginBottom: 10 }}
          >
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="EUR" />
            </Text>
          </View>

          <View
            className="justify-between"
            style={{ flexDirection: "row", marginBottom: 10 }}
          >
            <Text className="text-gray-400">Deliver Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="EUR" />
            </Text>
          </View>

          <View
            className="justify-between"
            style={{ flexDirection: "row", marginBottom: 10 }}
          >
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="EUR" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            className="rounded-lg"
            style={{ backgroundColor: "#00CCBB", padding: 10 }}
          >
            <Text
              className="font-bold"
              style={{ textAlign: "center", color: "white", fontSize: 18 }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
