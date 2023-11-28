import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { showMessage } from "react-native-flash-message";
import { Shadow } from "react-native-shadow-2";

import { COLORS, FONTS } from "../constants";
import Heart from "../components/svg/Heart";
import Add from "../components/svg/Add";

export default function ItemComponentOne({ item, onPress }) {
    return (
        <Shadow
            startColor={COLORS.shadowStartColor}
            finalColor={COLORS.shadowFinalColor}
            distance={COLORS.shadowDistance}
            viewStyle={{ marginRight: 15 }}
        >
            <TouchableOpacity
                style={{
                    width: 155,
                    marginHorizontal: 7.5,
                    borderRadius: 10,
                    padding: 10,
                    paddingBottom: 16,
                    paddingTop: 16,
                    alignItems: "center",
                }}
                onPress={onPress}
            >
                <Image
                    source={item.presentationImage}
                    style={{
                        width: 85,
                        height: 85,
                        borderRadius: 50,
                        marginBottom: 10,
                    }}
                />
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        padding: 10,
                        paddingTop: 16,
                    }}
                >
                    <Heart fillColor={COLORS.red} strokeColor={COLORS.red} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        padding: 10,
                        paddingTop: 16,
                    }}
                    onPress={() => {
                        showMessage({
                            message: "Success",
                            description: `${item.name} was added.`,
                            type: "success",
                        });
                    }}
                >
                    <Add />
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: "center",
                        marginBottom: 4,
                        ...FONTS.Roboto_500Medium,
                        fontSize: 16,
                        textTransform: "capitalize",
                        lineHeight: 16 * 1.2,
                    }}
                    numberOfLines={1}
                >
                    {item.name}
                </Text>
                <Text
                    style={{
                        marginBottom: 10,
                        color: COLORS.gray2,
                    }}
                    numberOfLines={1}
                >
                    {item.compound}
                </Text>
                <Text
                    style={{
                        marginBottom: 11,
                        ...FONTS.Roboto_500Medium,
                        fontSize: 16,
                        color: COLORS.carrot,
                    }}
                >
                    ${item.price}
                </Text>
                <TouchableOpacity
                    style={{
                        width: 128,
                        height: 32,
                        backgroundColor: COLORS.lightGreen,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "capitalize",
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
                            color: COLORS.green,
                            ...FONTS.Roboto_500Medium,
                            fontSize: 12,
                        }}
                    >
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </Shadow>
    );
}
