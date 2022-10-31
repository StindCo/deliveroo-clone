import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";
import { getFeatured } from "../models/Featured";

export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurents] = React.useState([]);
  React.useEffect(() => {
    getFeatured(id).then(({ featured }) =>
      setRestaurents(featured?.restaurants)
    );
  }, []);

  return (
    <View style={styles.FeaturedRow}>
      <View className="mt-4" style={styles.contentHeader}>
        <Text className="text-lg" style={{ fontWeight: "bold" }}>
          {title}
        </Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>

      <Text
        className="px-4"
        style={{
          color: "rgb(107, 114, 128)",
          fontSize: 12,
          lineHeight: 13,
        }}
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((restaurant) => (
          <RestaurentCard
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            short_description={restaurant.shortDescription}
            imgUrl={restaurant?.image?.url}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  FeaturedRow: {},
  contentHeader: {
    display: "flex",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
