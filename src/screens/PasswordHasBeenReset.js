import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Key, Button } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";

export default function PasswordHasBeenReset() {
    const navigation = useNavigation();

    function renderCOntent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginBottom: 36 }}>
                    <Key />
                </View>
                <Text
                    style={{
                        ...FONTS.H2,
                        marginBottom: 10,
                    }}
                >
                    Password Has Been Reset
                </Text>
                <Text
                    style={{
                        ...FONTS.H4,
                    }}
                >
                    Qui ex aute ipsum duis. Incididunt adipisicing voluptate
                    laborum
                </Text>
                <View style={{ height: SIZES.height / 5 }} />
                <Button
                    title="Done"
                    onPress={() => navigation.navigate("SignIn")}
                />
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            {renderCOntent()}
        </SafeAreaView>
    );
}
