import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DashedLine from "react-native-dashed-line";

import {
    Header,
    Cash,
    Bank,
    CheckTwo,
    CheckThree,
    Button,
} from "../components";
import { COLORS, FONTS, SAFEAREAVIEW } from "../constants";

const methods = [
    {
        id: "1",
        method: "Cash on delivery",
        icon: <Cash />,
    },
    {
        id: "2",
        method: "Bank transfer",
        icon: <Bank />,
    },
];

export default function PaymentMethodOne() {
    const [selectedMethod, setSelectedMethod] = useState("1");
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Payment Method"
                onPress={() => navigation.goBack()}
            />

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    paddingTop: 44,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginBottom: 9 }}>
                    {methods.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: "100%",
                                    height: 50,
                                    borderColor: COLORS.lightGray,
                                    borderWidth: 1,
                                    marginBottom: 12,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: 13,
                                }}
                                onPress={() => setSelectedMethod(item.id)}
                            >
                                {item.icon}
                                <Text
                                    style={{
                                        marginLeft: 10,
                                        ...FONTS.Roboto_400Regular,
                                        fontSize: 16,
                                        textTransform: "capitalize",
                                        color: COLORS.black,
                                        flex: 1,
                                    }}
                                >
                                    {item.method}
                                </Text>

                                {selectedMethod == item.id ? (
                                    <CheckThree />
                                ) : (
                                    <View
                                        style={{
                                            width: 16.5,
                                            height: 16.5,
                                            backgroundColor: "#F0F1F5",
                                            borderRadius: 10,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    ></View>
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View
                    style={{
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: COLORS.lightGray,
                        paddingVertical: 19,
                        paddingHorizontal: 20,
                        marginBottom: 30,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 14,
                                textTransform: "capitalize",
                                color: COLORS.black,
                            }}
                        >
                            Net price
                        </Text>
                        <Text
                            style={{
                                ...FONTS.Roboto_700Bold,
                                fontSize: 16,
                                color: COLORS.green,
                                marginBottom: 9,
                            }}
                        >
                            $150
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 23,
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 14,
                                color: COLORS.gray2,
                                textTransform: "capitalize",
                            }}
                        >
                            Shipping fee
                        </Text>
                        <Text
                            style={{
                                ...FONTS.Roboto_400Regular,
                                fontSize: 14,
                                color: COLORS.gray2,
                            }}
                        >
                            00
                        </Text>
                    </View>
                    <DashedLine
                        dashLength={7}
                        dashThickness={1}
                        dashGap={5}
                        dashColor="#C8C8D3"
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 23,
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 18,
                                textTransform: "capitalize",
                                color: COLORS.black,
                            }}
                        >
                            Total price
                        </Text>
                        <Text
                            style={{
                                ...FONTS.Roboto_700Bold,
                                fontSize: 18,
                                textTransform: "capitalize",
                                color: COLORS.carrot,
                            }}
                        >
                            $150
                        </Text>
                    </View>
                </View>
                <Button
                    title="Process Payment"
                    onPress={() => navigation.navigate("OrderSuccessful")}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
