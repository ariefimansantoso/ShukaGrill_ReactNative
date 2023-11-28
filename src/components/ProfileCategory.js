import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import DashedLine from "react-native-dashed-line";

import ArrowTwo from "../components/svg/ArrowTwo";
import { COLORS, FONTS } from "../constants";

export default function ProfileCategory({
    icon,
    title,
    subtitle,
    onPress,
    iconBgColor,
}) {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
            }}
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: "row",
                    paddingVertical: 13,
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        backgroundColor: iconBgColor,
                        borderRadius: 20,
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={icon}
                        style={{ width: "100%", height: 20 }}
                        resizeMode="contain"
                    />
                </View>

                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 16,
                            color: COLORS.black,
                            marginBottom: 2,
                        }}
                    >
                        {title}
                    </Text>
                    {subtitle && (
                        <Text
                            style={{
                                color: COLORS.gray2,
                                textTransform: "capitalize",
                            }}
                        >
                            {subtitle}
                        </Text>
                    )}
                </View>
                <ArrowTwo />
            </View>
            <DashedLine
                dashLength={7}
                dashThickness={1}
                dashGap={5}
                dashColor="#C8C8D3"
            />
        </TouchableOpacity>
    );
}
