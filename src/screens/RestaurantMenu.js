import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import {
    Header,
    Heading,
    ItemComponentOne,
    ItemComponentTwo,
} from "../components";
import { SAFEAREAVIEW, category, FONTS, COLORS } from "../constants";

export default function RestaurantMenu() {
    const [selectCategory, setSelectCategory] = useState(1);

    const route = useRoute();
    const navigation = useNavigation();
    const { restaurant, dishes } = route.params;

    function renderCategories() {
        return (
            <View style={{ marginBottom: 40, marginTop: 30 }}>
                <FlatList
                    data={category}
                    contentContainerStyle={{ paddingLeft: 30 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setSelectCategory(index + 1)}
                        >
                            <View
                                style={{
                                    width: 70,
                                    height: 70,
                                    backgroundColor:
                                        selectCategory == index + 1
                                            ? COLORS.green
                                            : COLORS.lightGreen,
                                    borderRadius: 35,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginHorizontal: 7,
                                    marginLeft: index === 0 ? 0 : 7,
                                    marginBottom: 11,
                                }}
                            >
                                <Image
                                    source={item.image}
                                    style={{
                                        height: 35,
                                        width: "100%",
                                        tintColor:
                                            selectCategory == item.id
                                                ? COLORS.white
                                                : COLORS.gray2,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    ...FONTS.Roboto_500Medium,
                                    fontSize: 14,
                                    textTransform: "capitalize",
                                    color:
                                        selectCategory == item.id
                                            ? COLORS.green
                                            : COLORS.gray2,
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }

    function renderPopularDeal() {
        return (
            <View>
                <Heading title="Popular Deal" />
                <FlatList
                    contentContainerStyle={{
                        paddingLeft: 30,
                        paddingBottom: 30,
                        paddingTop: 21,
                    }}
                    data={dishes}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        item.popularDeal === true && (
                            <ItemComponentOne
                                item={item}
                                onPress={() =>
                                    navigation.navigate("FoodDetails", {
                                        dish: item,
                                        dishes: dishes,
                                    })
                                }
                            />
                        )
                    }
                />
            </View>
        );
    }

    function renderBestMeal() {
        return (
            <View>
                <Heading title="Best Meal" />
                <FlatList
                    contentContainerStyle={{
                        paddingLeft: 30,
                        paddingVertical: 21,
                    }}
                    data={dishes}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        item.bestMeal === true && (
                            <ItemComponentTwo
                                item={item}
                                onPress={() =>
                                    navigation.navigate("FoodDetails", {
                                        dish: item,
                                        dishes: dishes,
                                    })
                                }
                            />
                        )
                    }
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Restaurant menu"
                onPress={() => navigation.goBack()}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {renderCategories()}
                {renderPopularDeal()}
                {renderBestMeal()}
            </ScrollView>
        </SafeAreaView>
    );
}
