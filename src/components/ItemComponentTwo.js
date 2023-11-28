import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { showMessage } from "react-native-flash-message";

import { FONTS, COLORS } from "../constants";

import Heart from "../components/svg/Heart";

export default function ItemComponentTwo({ item, onPress }) {
    return (
        <Shadow
            viewStyle={{ marginRight: 15 }}
            startColor={COLORS.shadowStartColor}
            finalColor={COLORS.shadowFinalColor}
        >
            <TouchableOpacity
                style={{
                    width: 250,
                    borderRadius: 10,
                }}
                onPress={onPress}
            >
                <ImageBackground
                    source={item.presentationImage}
                    style={{
                        height: 144,
                        width: "100%",
                    }}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <TouchableOpacity
                        style={{
                            padding: 16,
                            alignSelf: "flex-start",
                        }}
                    >
                        <Heart
                            fillColor={COLORS.red}
                            strokeColor={COLORS.red}
                        />
                    </TouchableOpacity>
                </ImageBackground>
                <View
                    style={{
                        paddingHorizontal: 19,
                        paddingTop: 12,
                        paddingBottom: 15,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 3,
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                                textTransform: "capitalize",
                                lineHeight: 16 * 1.2,
                                width: "70%",
                            }}
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>

                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                                color: COLORS.carrot,
                            }}
                        >
                            ${item.price}
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginBottom: 15,
                            color: COLORS.gray2,
                        }}
                        numberOfLines={1}
                    >
                        {item.compound}
                    </Text>
                    <TouchableOpacity
                        style={{
                            height: 32,
                            width: "100%",
                            backgroundColor: COLORS.lightGreen,
                            justifyContent: "center",
                            alignItems: "center",
                            textTransform: "capitalize",
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            showMessage({
                                message: "Success",
                                description: `${item.name} was added.`,
                                type: "success",
                            });
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                ...FONTS.Roboto_500Medium,
                                fontSize: 12,
                                color: COLORS.green,
                                textTransform: "capitalize",
                            }}
                        >
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Shadow>
    );
}
