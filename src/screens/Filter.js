import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, CheckTwo, Button } from "../components";
import { SAFEAREAVIEW, FONTS, COLORS, SIZES } from "../constants";

const sortBy = [
    { id: "1", sort: "Price low to high" },
    { id: "2", sort: "Price high to low" },
    { id: "3", sort: "Top rated" },
    { id: "4", sort: "Nearest to me" },
    { id: "5", sort: "Most popular" },
];

const cuisines = [
    { id: "1", cuisine: "Ukrainian" },
    { id: "2", cuisine: "Italian" },
    { id: "3", cuisine: "Georgian" },
    { id: "4", cuisine: "American" },
    { id: "5", cuisine: "Chines" },
    { id: "6", cuisine: "Thai" },
    { id: "7", cuisine: "Asian" },
    { id: "8", cuisine: "Japanese" },
];

export default function Filter() {
    const [selectedSort, setSelectedSort] = useState("1");
    const [selectedCuisine, setSelectedCuisine] = useState("1");
    const navigation = useNavigation();

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginBottom: 40 }}>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            textTransform: "capitalize",
                            fontSize: 16,
                            marginBottom: 23,
                        }}
                    >
                        sort by
                    </Text>
                    {sortBy.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    marginBottom: 15,
                                    paddingBottom: 15,
                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.lightGray,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                                onPress={() => setSelectedSort(item.id)}
                            >
                                <Text
                                    style={{
                                        ...FONTS.Roboto_400Regular,
                                        color: COLORS.gray2,
                                    }}
                                >
                                    {item.sort}
                                </Text>
                                {item.id === selectedSort && <CheckTwo />}
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={{ marginBottom: 40 }}>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            textTransform: "capitalize",
                            fontSize: 16,
                            marginBottom: 23,
                        }}
                    >
                        cuisines
                    </Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {cuisines.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: "50%",
                                        marginBottom: 16,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                    onPress={() => setSelectedCuisine(item.id)}
                                >
                                    <View
                                        style={{
                                            width: 20,
                                            height: 20,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderWidth: 1,
                                            borderColor: COLORS.green,
                                            borderRadius: 5,
                                            marginRight: 8,
                                        }}
                                    >
                                        {item.id === selectedCuisine && (
                                            <CheckTwo />
                                        )}
                                    </View>

                                    <Text
                                        style={{
                                            ...FONTS.Roboto_400Regular,
                                            fontSize: 14,
                                            color: COLORS.gray2,
                                        }}
                                    >
                                        {item.cuisine}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <Button title="Apply" />
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="Filter" onPress={() => navigation.goBack()} />
            {renderContent()}
        </SafeAreaView>
    );
}
