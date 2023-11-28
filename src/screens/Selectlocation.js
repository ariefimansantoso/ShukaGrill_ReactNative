import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, Button } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";

export default function Selectlocation() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingVertical,
                    alignItems: "center",
                }}
            >
                <Image
                    source={require("../assets/images/map.png")}
                    style={{
                        height: 192,
                        width: "100%",
                        borderRadius: 20,
                        marginBottom: 23,
                    }}
                    resizeMode="contain"
                />
                <Text
                    style={{
                        textAlign: "center",
                        marginBottom: 21,
                        color: COLORS.gray2,
                        paddingHorizontal: 20,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                    }}
                >
                    Set your location to start exploring restaurants around you
                </Text>
                <Button
                    title="Enable Location"
                    containerStyle={{ marginBottom: 15 }}
                    onPress={() => navigation.navigate("VerifyYourPhoneNumber")}
                />
                <Button
                    title="No, I do it later"
                    containerStyle={{ backgroundColor: COLORS.yellow }}
                    onPress={() => navigation.navigate("VerifyYourPhoneNumber")}
                />
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Select Location"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
        </SafeAreaView>
    );
}
