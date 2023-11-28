import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header, InputField, Button, Mail, Lock, Check } from "../components";
import { SAFEAREAVIEW, FONTS, COLORS, SIZES } from "../constants";

export default function SignIn() {
    const navigation = useNavigation();
    const [remember, setRemember] = useState(false);

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="Sign In" onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    alignItems: "center",
                    paddingTop: SIZES.paddingTop_02,
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        marginBottom: 5,
                        ...FONTS.Roboto_700Bold,
                        color: COLORS.green,
                        textTransform: "capitalize",
                        textAlign: "center",
                        lineHeight: 22 * 1.2,
                    }}
                >
                    Welcome Back Jhon!
                </Text>
                <Text
                    style={{
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.black,
                        marginBottom: 37,
                        color: COLORS.gray2,
                        textAlign: "center",
                    }}
                >
                    Sign in to continue
                </Text>
                <InputField
                    contaynerStyle={{ marginBottom: 15 }}
                    placeholder="johndoe@mail.com"
                    leftIcon={<Mail />}
                />
                <InputField
                    leftIcon={<Lock />}
                    placeholder="*********************"
                    contaynerStyle={{ marginBottom: 37 }}
                    secureTextEntry={true}
                />
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 20,
                        marginBottom: 18,
                    }}
                >
                    <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={() => setRemember(!remember)}
                    >
                        <View
                            style={{
                                width: 16,
                                height: 16,
                                borderRadius: 3,
                                borderWidth: 1,
                                borderColor: COLORS.green,
                                marginRight: 8,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {remember && <Check />}
                        </View>
                        <Text
                            style={{
                                ...FONTS.Roboto_400Regular,
                                fontSize: 16,
                                color: COLORS.black,
                            }}
                        >
                            Remember me
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_400Regular,
                                fontSize: 16,
                                color: COLORS.carrot,
                                paddingRight: 20,
                            }}
                        >
                            Forgot password ?
                        </Text>
                    </TouchableOpacity>
                </View>
                <Button
                    title="Sign in"
                    containerStyle={{ backgroundColor: COLORS.green }}
                    onPress={() => navigation.navigate("MainLayout")}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "flex-end",
                        flex: 1,
                        marginBottom: 34,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 16,
                            color: COLORS.black,
                        }}
                    >
                        Already have not an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                                color: COLORS.green,
                            }}
                        >
                            {" "}
                            Sing up!
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
