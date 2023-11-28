import { View, Text, ScrollView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Header, InputField, Button } from "../components";
import { FONTS, SAFEAREAVIEW, SIZES } from "../constants";

export default function NewPassword() {
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
                <Text style={{ ...FONTS.H2, marginBottom: 10 }}>
                    New Password
                </Text>
                <Text
                    style={{
                        ...FONTS.H4,
                        marginBottom: 18,
                        paddingHorizontal: 20,
                    }}
                >
                    We have sent you an SMS with a code to number +17 0123456789
                </Text>
                <InputField
                    placeholder="New Password"
                    contaynerStyle={{ marginBottom: 15 }}
                />
                <InputField
                    placeholder="Confirm Password"
                    contaynerStyle={{ marginBottom: 30 }}
                />
                <Button
                    title="Change Password"
                    onPress={() => navigation.navigate("PasswordHasBeenReset")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <View style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Reset Password"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
        </View>
    );
}
