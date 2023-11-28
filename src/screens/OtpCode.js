import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Header, Button } from "../components";
import { SAFEAREAVIEW, SIZES, COLORS, FONTS } from "../constants";

export default function OtpCode() {
    const navigation = useNavigation();

    const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fiveInput = useRef();

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    alignItems: "center",
                }}
            >
                <View style={{ height: SIZES.height / 18 }} />
                <Text style={{ ...FONTS.H2, marginBottom: 12 }}>
                    OTP Verification
                </Text>
                <Text
                    style={{
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 5,
                    }}
                >
                    An authentication code has been sent to
                </Text>
                <Text
                    style={{ color: COLORS.carrot, ...FONTS.Roboto_400Regular }}
                >
                    (+880) 111 222 333
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginVertical: 24,
                    }}
                >
                    <TextInput
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={secondInput}
                        onChangeText={(text) => {
                            setOtp({ ...otp, 2: text });
                            text
                                ? thirdInput.current.focus()
                                : firstInput.current.focus();
                        }}
                        style={{
                            textAlign: "center",
                            paddingHorizontal: 22,
                            paddingVertical: 14.5,
                            textAlign: "center",
                            fontSize: 24,
                            color: COLORS.black,
                            width: 59,
                            borderRadius: 5,
                            backgroundColor: "white",
                            backgroundColor: COLORS.lightGray,
                            borderRadius: 30,
                            ...FONTS.Roboto_700Bold,
                        }}
                    />
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                color: COLORS.black,
                                width: 59,
                                backgroundColor: COLORS.lightGray,
                                borderRadius: 30,
                                ...FONTS.Roboto_700Bold,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 3: text });
                                text
                                    ? fourthInput.current.focus()
                                    : secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                color: COLORS.black,
                                width: 59,
                                backgroundColor: COLORS.lightGray,
                                borderRadius: 30,
                                ...FONTS.Roboto_700Bold,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 4: text });
                                text
                                    ? fiveInput.current.focus()
                                    : thirdInput.current.focus();
                            }}
                        />
                    </View>
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                color: COLORS.black,
                                width: 59,
                                backgroundColor: COLORS.lightGray,
                                borderRadius: 30,
                                ...FONTS.Roboto_700Bold,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fiveInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 5: text });
                                !text && fourthInput.current.focus();
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 16,
                            color: COLORS.black,
                        }}
                    >
                        I didn't receive code.
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                ...FONTS.Roboto_700Bold,
                                fontSize: 16,
                                color: COLORS.carrot,
                            }}
                        >
                            {" "}
                            Resend Code
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        color: COLORS.red,
                        ...FONTS.Roboto_500Medium,
                        fontSize: 16,
                        marginBottom: 20,
                    }}
                >
                    1:20 Sec left
                </Text>
                <Button
                    title="Verify Now"
                    containerStyle={{ backgroundColor: COLORS.green }}
                    onPress={() => navigation.navigate("AccountCreated")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Phone Verification"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
        </SafeAreaView>
    );
}
