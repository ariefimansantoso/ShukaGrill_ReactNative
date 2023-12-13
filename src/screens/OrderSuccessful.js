import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import { SuccessTwo, Button } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function OrderSuccessful() {
    const navigation = useNavigation();
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
                        color: COLORS.red,
                        marginBottom: 10,
                    }}
                >
                    Order berhasil!
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
                    Order kamu sudah dicatat dan kamu akan menerima konfirmasi email!
                </Text>
                <Button
                    title="Daftar Orderku"
                    containerStyle={{ marginBottom: 15, backgroundColor: COLORS.lightRed }}
                    textStyle={{ color: COLORS.red }}
                    onPress={() => navigation.navigate("MainLayout", {
                        openTab: "OrderHistory"
                    })}
                />
                <Button
                    title="Order lagi"
                    containerStyle={{ backgroundColor: COLORS.red }}
                    textStyle={{ color: COLORS.white }}
                    onPress={() => navigation.navigate("MainLayout", {
                        openTab: "FoodDetails"
                    })}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
