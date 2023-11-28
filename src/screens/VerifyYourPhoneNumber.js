import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";

import { Header, Button } from "../components";
import { FONTS, SAFEAREAVIEW, SIZES, COLORS } from "../constants";

export default function VerifyYourPhoneNumber() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    alignItems: "center",
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ ...FONTS.H2, marginBottom: 10 }}>Verify</Text>
                <Text
                    style={{
                        ...FONTS.H4,
                        paddingHorizontal: 20,
                        marginBottom: 27,
                    }}
                >
                    We have sent you an SMS with a code to number +17 0123456789
                </Text>
                <PhoneInput
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#E2E2E2",
                        marginBottom: 30,
                        fontSize: 16,
                        fontFamily: "Mulish_400Regular",
                        paddingBottom: 9,
                    }}
                    placeholder="123456789"
                    placeholderTextColor={COLORS.black}
                    initialCountry={"us"}
                />
                <Button
                    title="Confirm"
                    onPress={() => navigation.navigate("OtpCode")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Verify Your Phone Number"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
        </SafeAreaView>
    );
}
