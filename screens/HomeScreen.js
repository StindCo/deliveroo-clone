import {
  Platform,
  Image,
  TextInput,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import {
  headView,
  SeachViewStyle,
  HomeScreenStyle as style,
} from "./HomeScreenStyle";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className="bg-white pt-5"
      style={{ backgroundColor: "#fff", paddingBottom: "0.75rem" }}
    >
      <Text>
        {/* header content */}
        <View style={[headView.headerView, headView.flexRowCenter, style.mx4]}>
          <View style={[headView.textHeader, headView.flexRowCenter]}>
            <Image
              source={{
                uri: require("../assets/logo.jpg"),
              }}
              className="rounded-full"
              style={[headView.imageLogo]}
            />
            <View style={style.mx4}>
              <Text style={[style.textBold, style.textGray, style.textXs]}>
                Deliver Now!
              </Text>
              <Text
                style={[
                  style.textBold,
                  style.textXl,
                  {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                Current Location
                <ChevronDownIcon
                  size={20}
                  style={{ marginTop: "4px", marginRight: "2px" }}
                  color="#00CCBB"
                />
              </Text>
            </View>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search content */}

        <View style={[SeachViewStyle.searchView, style.mx4]}>
          <View
            style={[style.flexRow, SeachViewStyle.seacchForm]}
            className="flex-1"
          >
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              style={[
                style.mx4,
                SeachViewStyle.inputStyle,
                Platform.select({
                  web: {
                    outlineStyle: "none",
                  },
                }),
              ]}
              className="text-gray-500"
              placeholder="Restaurents and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon
            style={{ padding: "0.35rem" }}
            color="#00CCBB"
            size={25}
          />
        </View>

        
      </Text>
    </SafeAreaView>
  );
}
