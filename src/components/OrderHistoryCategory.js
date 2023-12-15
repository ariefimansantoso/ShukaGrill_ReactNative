import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, baseImageUrl } from "../constants";

export default function OrderHistoryCategory({ item, type }) {
    let totalPax = (item.ChildrenPax == null ? 0 : item.ChildrenPax) + item.Pax + (item.SeniorPax == null ? 0 : item.SeniorPax);
    let orderForDate = new Date(item.OrderForDate);
    let orderForDateStr = orderForDate.getDate() + "-" + (parseInt(orderForDate.getMonth()) + 1) + "-" + orderForDate.getFullYear();

    
    return (
        <View
            style={{
                width: "100%",
                height: 97,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.lightGray,
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
            }}
        >
            <Image
                source={{ uri: item.MenuPhotoUrl == null ? "https://www.shukagrill.com/backend/Content/images/banner/spesial.png" : baseImageUrl + item.MenuPhotoUrl }}
                style={{
                    width: 65,
                    height: 65,
                    borderRadius: 40,
                    marginRight: 12,
                }}
            />
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 3,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 13,
                            color: COLORS.gray2,
                            flex: 1,
                        }}
                    >
                        {orderForDateStr}
                    </Text>
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            backgroundColor: COLORS.yellow,
                            borderRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            marginHorizontal: 5,
                            ...FONTS.Roboto_400Regular,
                            fontSize: 13,
                            color: COLORS.gray2,
                        }}
                    >{`${totalPax} Pax: `}</Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 13,
                            color: COLORS.carrot,
                        }}
                    >
                        {item.OrderTotal != null ? item.OrderTotal.toLocaleString("id-ID") : 0}
                    </Text>
                </View>

                <Text
                    style={{
                        ...FONTS.Roboto_700Bold,
                        fontSize: 15,
                        textTransform: "capitalize",
                        color: COLORS.black,
                    }}
                >
                    {`${item.BranchName}`} 
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {item.completed == true ? (
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
                                    backgroundColor: "red",
                                    borderRadius: 4,
                                    marginRight: 5,
                                }}
                            />
                            <Text
                                style={{
                                    ...FONTS.Roboto_400Regular,
                                    fontSize: 13,
                                    color: COLORS.carrot,
                                }}
                            >
                                Completed
                            </Text>
                        </View>
                    ) : (
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
                                    backgroundColor: COLORS.green,
                                    borderRadius: 4,
                                    marginRight: 5,
                                }}
                            />
                            {type == "upcoming" ? (
                                <Text
                                    style={{
                                        ...FONTS.Roboto_400Regular,
                                        fontSize: 13,
                                        color: COLORS.green,
                                    }}
                                >
                                    Upcoming
                                </Text>
                            ) : (
                                <Text
                                    style={{
                                        ...FONTS.Roboto_400Regular,
                                        fontSize: 13,
                                        color: COLORS.green,
                                    }}
                                >
                                    Completed
                                </Text>
                            )}
                        </View>
                    )}

                    {/* {type == "completed" && (
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.green,
                                borderRadius: 12,
                            }}
                        >
                            <Text
                                style={{
                                    paddingHorizontal: 16,
                                    paddingVertical: 4,
                                    color: COLORS.white,
                                }}
                            >
                                Re-Order
                            </Text>
                        </TouchableOpacity>
                    )} */}

                    {/* {type == "upcoming" && (
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.red,
                                borderRadius: 12,
                            }}
                        >
                            <Text
                                style={{
                                    paddingHorizontal: 16,
                                    paddingVertical: 4,
                                    color: COLORS.white,
                                }}
                            >
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    )} */}
                </View>
            </View>
        </View>
    );
}
