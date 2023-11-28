import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SAFEAREAVIEW } from "../constants";
import { Header, InputField } from "../components";

export default function SignUp() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="Sign Un" onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    paddingVertical: 43,
                    alignItems: "center",
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        ...FONTS.Roboto_700Bold,
                        fontSize: 22,
                        color: COLORS.green,
                        textTransform: "capitalize",
                        marginBottom: 5,
                    }}
                >
                    Sign up with
                </Text>
                <Text style={{ ...FONTS.Roboto_400Regular, fontSize: 16 }}>
                    email and phone number
                </Text>
                <InputField placeholder="johndoe@mail.com" />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
