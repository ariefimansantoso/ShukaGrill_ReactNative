import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

export default function Button({
    title,
    containerStyle,
    textColor,
    onPress,
    textStyle,
}) {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.lightGreen_02,
                ...containerStyle,
                zIndex: 1,
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    textAlign: "center",
                    color: textColor,
                    fontSize: 16,
                    color: COLORS.white,
                    textTransform: "capitalize",
                    ...FONTS.Roboto_500Medium,
                    ...textStyle,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
