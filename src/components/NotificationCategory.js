import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

export default function NotificationCategory({ icon, title, subtitle }) {
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                borderColor: COLORS.lightGray,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 16,
                paddingVertical: 19,
                marginBottom: 15,
            }}
        >
            {icon}
            <View style={{ marginLeft: 15 }}>
                <Text
                    style={{
                        ...FONTS.Roboto_700Bold,
                        fontSize: 16,
                        color: COLORS.black,
                        textTransform: "capitalize",
                        marginBottom: 3,
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        ...FONTS.Roboto_400Regular,
                        fontSize: 14,
                        color: COLORS.gray2,
                    }}
                >
                    {subtitle}
                </Text>
            </View>
        </View>
    );
}
