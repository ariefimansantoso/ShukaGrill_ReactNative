import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { FONTS, COLORS } from "../constants";

export default function Heading({
    title,
    containerStyle,
    seeAll,
    seeAllOnPress,
    fontStyle,
}) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                ...containerStyle,
            }}
        >
            <Text
                style={{
                    ...FONTS.Roboto_700Bold,
                    fontSize: 20,
                    textTransform: "capitalize",
                    color: COLORS.black,
                    ...fontStyle,
                }}
            >
                {title}
            </Text>
            {seeAll && (
                <TouchableOpacity onPress={seeAllOnPress}>
                    <Text
                        style={{
                            textTransform: "capitalize",
                            ...FONTS.Roboto_400Regular,
                            fontSize: 14,
                            color: COLORS.carrot,
                        }}
                    >
                        See all
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
