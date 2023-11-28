import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, Card, ArrowThree } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";

const cards = [
    {
        id: "1",
        card: require("../assets/images/cards/card-01.png"),
    },
    {
        id: "2",
        card: require("../assets/images/cards/card-02.png"),
    },
    {
        id: "3",
        card: require("../assets/images/cards/card-03.png"),
    },
];

const methods = [
    {
        id: "1",
        method: "Credit / Debit / ATM Card",
    },
    {
        id: "2",
        method: "Cash on  Payment",
    },
];

export default function PaymentMethodTwo() {
    const [selectedMethod, setSelectedMethod] = useState("1");
    const naviagation = useNavigation();

    function renderPaymentMethod() {
        return (
            <ScrollView style={{ flex: 1, paddingTop: SIZES.paddingTop_01 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 30,
                        paddingBottom: 22,
                    }}
                >
                    {cards.map((item, index) => {
                        return (
                            <View key={index}>
                                <Image
                                    source={item.card}
                                    style={{
                                        width: 279,
                                        height: 170,
                                        marginRight: 10,
                                    }}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={{ paddingHorizontal: 30 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 50,
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                                color: COLORS.black,
                            }}
                        >
                            Visa **********250
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    ...FONTS.Roboto_500Medium,
                                    fontSize: 14,
                                    textTransform: "capitalize",
                                    color: COLORS.red,
                                }}
                            >
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        {methods.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        height: 50,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                    onPress={() => setSelectedMethod(item.id)}
                                >
                                    <View
                                        style={{
                                            width: 14,
                                            height: 14,
                                            borderWidth: 1,
                                            borderRadius: 7,
                                            marginRight: 15,
                                            borderColor: COLORS.green,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {item.id === selectedMethod && (
                                            <View
                                                style={{
                                                    width: 9,
                                                    height: 9,
                                                    backgroundColor:
                                                        COLORS.green,
                                                    borderRadius: 5,
                                                }}
                                            />
                                        )}
                                    </View>
                                    <Text
                                        style={{
                                            ...FONTS.Roboto_500Medium,
                                            fontSize: 16,
                                            lineHeight: 16 * 1.2,
                                        }}
                                    >
                                        {item.method}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                        onPress={() => naviagation.navigate("AddNewCard")}
                    >
                        <Card />
                        <Text
                            style={{
                                flex: 1,
                                marginLeft: 9,
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                            }}
                        >
                            Add a new card
                        </Text>
                        <ArrowThree />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Payment Method"
                onPress={() => naviagation.goBack()}
            />
            {renderPaymentMethod()}
        </SafeAreaView>
    );
}
