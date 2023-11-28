import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Header, InputField, Button } from "../components";
import { SAFEAREAVIEW, SIZES } from "../constants";

export default function ChangePassword() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: SIZES.paddingVertical,
                    paddingHorizontal: 30,
                }}
            >
                <InputField
                    placeholder="Old Password"
                    contaynerStyle={{ marginBottom: 15 }}
                />
                <InputField
                    placeholder="New Password"
                    contaynerStyle={{ marginBottom: 15 }}
                />
                <InputField
                    placeholder="Confirm Password"
                    contaynerStyle={{ marginBottom: 25 }}
                />
                <Button
                    title="Save Now!"
                    onPress={() => navigation.navigate("MainLayout")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Change Password"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
        </SafeAreaView>
    );
}
