import { View, Text, TextInput } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES } from "../constants";

export default function EditProfileCategory({ title, placeholder }) {
    return (
        <View style={{ width: "100%", marginBottom: 18 }}>
            <Text
                style={{
                    ...FONTS.Roboto_400Regular,
                    fontSize: 14,
                    color: COLORS.black,
                    marginBottom: 10,
                    textTransform: "capitalize",
                }}
            >
                {title}
            </Text>
            <View
                style={{
                    width: "100%",
                    height: 44,
                    backgroundColor: COLORS.lightGray,
                    borderRadius: 10,
                    paddingHorizontal: 18,
                    justifyContent: "center",
                }}
            >
                <TextInput placeholder={placeholder} style={{ flex: 1 }} />
            </View>
        </View>
    );
}
