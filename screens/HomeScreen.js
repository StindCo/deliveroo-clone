import {
  Platform,
  Image,
  TextInput,
  View,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import logo from "../assets/logo.jpg";

import Categories from "../components/Categories";
import {
  headView,
  SeachViewStyle,
  HomeScreenStyle as style,
} from "./HomeScreenStyle";
import FeaturedRow from "../components/FeaturedRow";
import { getFeatureds } from "../models/Featured";

export default function HomeScreen() {
  const [featuredFactories, setFeaturedFactories] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getFeatureds().then(({ featureds }) => setFeaturedFactories(featureds));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: "#fff",
        },
        Platform.select({
          android: {
            paddingTop: 25,
          },
        }),
      ]}
    >
      {/* header content */}
      <View style={[headView.headerView, headView.flexRowCenter, style.mx4]}>
        <View style={[headView.textHeader, headView.flexRowCenter]}>
          <Image
            source={logo}
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
                size={16}
                style={{ marginTop: 8, marginRight: 2 }}
                color="#00CCBB"
              />
            </Text>
          </View>
        </View>

        <UserIcon size={25} color="#00CCBB" />
      </View>
      {/* Search content */}

      <View
        style={[
          SeachViewStyle.searchView,
          { marginBottom: 7, marginLeft: 15, marginRight: 20 },
        ]}
      >
        <View
          style={[style.flexRow, SeachViewStyle.seacchForm]}
          className="flex-1"
        >
          <MagnifyingGlassIcon
            size={25}
            color="gray"
            style={{ marginTop: 1 }}
          />
          <TextInput
            style={[
              style.mx4,
              SeachViewStyle.inputStyle,
              Platform.select({
                web: {
                  outlineStyle: "none",
                },
                android: {
                  padding: 0,
                },
              }),
            ]}
            className="text-gray-500"
            placeholder="Restaurents and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon
          style={{ padding: 4, marginLeft: 4 }}
          color="#00CCBB"
          size={28}
        />
      </View>

      {/* body view */}
      <ScrollView
        style={{
          backgroundColor: "rgb(229, 231, 235)",
          contentContainerStyle: {
            paddingBottom: 10,
          },
        }}
      >
        <Categories />

        {/* Features */}

        {featuredFactories.map((categorie) => (
          <FeaturedRow
            key={categorie.id}
            id={categorie.id}
            title={categorie.name}
            description={categorie.shortDescription}
          />
        ))}

        <View style={{ marginTop: 80 }}>
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
