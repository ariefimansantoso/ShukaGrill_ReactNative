import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import { SuccessTwo, Button } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW } from "../constants";

export default function OrderSuccessful() {
    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    justifyContent: "center",
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignSelf: "center", marginBottom: 36 }}>
                    <SuccessTwo />
                </View>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_700Bold,
                        fontSize: 22,
                        textTransform: "capitalize",
                        color: COLORS.green,
                        marginBottom: 10,
                    }}
                >
                    Order successful!
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 21,
                    }}
                >
                    Your order will be delivered on time. Thank you!
                </Text>
                <Button
                    title="View orders"
                    containerStyle={{ marginBottom: 15 }}
                />
                <Button
                    title="Continue Shopping"
                    containerStyle={{ backgroundColor: COLORS.lightGreen }}
                    textStyle={{ color: COLORS.green }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
