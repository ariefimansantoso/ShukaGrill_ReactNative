import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import Arrow from "./svg/Arrow";

import { COLORS, FONTS } from "../constants";

export default function Header({ title, onPress, titleStyle }) {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 42,
            }}
        >
            <TouchableOpacity
                style={{ position: "absolute", left: 0, paddingHorizontal: 30 }}
                onPress={onPress}
            >
                <Arrow />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 18,
                    ...FONTS.Roboto_500Medium,
                    color: COLORS.black,
                    textTransform: "capitalize",
                    ...titleStyle,
                }}
            >
                {title}
            </Text>
        </View>
    );
}
