import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header, Copy, Box, Button } from "../components";
import { SAFEAREAVIEW, promocodes, COLORS, FONTS, SIZES } from "../constants";

export default function MyPromocodes() {
    const navigation = useNavigation();

    function renderPromocodes() {
        return (
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    paddingVertical: SIZES.paddingTop_01,
                }}
                showsVerticalScrollIndicator={false}
            >
                {promocodes.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                width: "100%",
                                height: 97,
                                borderColor: COLORS.lightGray,
                                borderWidth: 1,
                                borderRadius: 10,
                                marginBottom: 15,
                                padding: 15,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                            onPress={() => {
                                showMessage({
                                    message: "Success",
                                    description: `${item.name} Promoсode has been copied.`,
                                    type: "success",
                                });
                            }}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 40,
                                    marginRight: 12,
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        ...FONTS.Roboto_700Bold,
                                        fontSize: 16,
                                        color: COLORS.black,
                                        lineHeight: 16 * 1.2,
                                        marginBottom: 3,
                                    }}
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.Roboto_700Bold,
                                        fontSize: 14,
                                        textTransform: "capitalize",
                                        color: COLORS.red,
                                        marginBottom: 3,
                                        lineHeight: 14 * 1.2,
                                    }}
                                >
                                    {item.discount}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 8,
                                            height: 8,
                                            backgroundColor:
                                                item.time ==
                                                "Valid until June 30, 2019"
                                                    ? COLORS.red
                                                    : COLORS.green,
                                            borderRadius: 4,
                                            marginRight: 5,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            ...FONTS.Roboto_500Medium,
                                            fontSize: 14,
                                            color: COLORS.gray2,
                                            lineHeight: 14 * 1.2,
                                        }}
                                    >
                                        {item.validDate}
                                    </Text>
                                </View>
                            </View>
                            <Copy />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    }

    function renderNoPromocodes() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    justifyContent: "center",
                    paddingVertical: SIZES.paddingTop_01,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignSelf: "center", marginBottom: 38 }}>
                    <Box />
                </View>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_700Bold,
                        fontSize: 22,
                        color: COLORS.green,
                        textTransform: "capitalize",
                        marginBottom: 10,
                    }}
                >
                    You do not have Promocodes
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 24,
                    }}
                >
                    Go hunt for vouchers at Foodsss Voucher right away.
                </Text>
                <View
                    style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: COLORS.lightGray,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                >
                    <TextInput
                        placeholder="Enter the voucher"
                        style={{ flex: 1, width: "100%" }}
                        textAlign="center"
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate("MainLayout")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="My Promocodes" onPress={() => navigation.goBack()} />
            {promocodes.length > 0 ? renderPromocodes() : renderNoPromocodes()}
        </SafeAreaView>
    );
}
