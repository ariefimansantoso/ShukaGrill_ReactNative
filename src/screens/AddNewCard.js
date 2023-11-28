import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { SAFEAREAVIEW, SIZES } from "../constants";
import { InputField, Button, Header } from "../components";

export default function AddNewCard() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Image
                    source={require("../assets/images/payment-method/01.png")}
                    style={{ width: "100%", height: 375, marginVertical: 16 }}
                />
                <InputField
                    placeholder="Account Holder Name"
                    contaynerStyle={{ marginBottom: 10 }}
                />
                <InputField
                    placeholder="Card Number"
                    contaynerStyle={{ marginBottom: 10 }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: 20,
                        justifyContent: "space-between",
                    }}
                >
                    <InputField
                        placeholder="Exp. Date"
                        contaynerStyle={{ width: SIZES.width / 2.45 }}
                    />
                    <InputField
                        placeholder="CVV Code"
                        contaynerStyle={{ width: SIZES.width / 2.45 }}
                    />
                </View>
                <Button
                    title="Save Now"
                    onPress={() => navigation.navigate("PaymentMethodTwo")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="Add New Card" onPress={() => navigation.goBack()} />
            {renderContent()}
        </SafeAreaView>
    );
}
