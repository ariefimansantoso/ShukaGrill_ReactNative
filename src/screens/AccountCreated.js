import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Success, Button } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";

export default function AccountCreated() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    paddingVertical: SIZES.paddingVertical,
                }}
            >
                <Success />
                <Text
                    style={{
                        ...FONTS.Roboto_700Bold,
                        fontSize: 22,
                        color: COLORS.green,
                        textTransform: "capitalize",
                        textAlign: "center",
                        marginTop: 35,
                        marginBottom: 10,
                    }}
                >
                    Account Created!
                </Text>
                <Text
                    style={{
                        marginBottom: 150,
                        textAlign: "center",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        paddingHorizontal: 20,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    Your account had beed created successfully. Please sign in
                    to use your account and enjoy.
                </Text>
                <Button
                    title="Take me to sign in"
                    containerStyle={{ backgroundColor: COLORS.green }}
                    onPress={() => navigation.navigate("SignIn")}
                />
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            {renderContent()}
        </SafeAreaView>
    );
}
