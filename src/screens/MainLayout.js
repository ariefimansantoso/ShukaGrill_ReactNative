import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { tabs, COLORS, FONTS, dishes } from "../constants";

import HomeOne from "./Home";
import FoodDetails from "./FoodDetails";
import CartIsEmpty from "../screens/CartIsEmpty";
import Contact from "../screens/Contact";
import EditProfile from "../screens/EditProfile";
import OrderHistory from "../screens/OrderHistory";
import Order from "../screens/Order";

export default function MainLayout({ route }) {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState("FoodDetails");
    //const { openTab, menuId } = route.params;
    //console.log("route params: " + route.params);
    //console.log("selectdTab: " + selectedTab);

    if(route.params && selectedTab != "Order") {
        navigation.navigate("Order", { menuId: route.params.menuId });
    }

    return (
        <View style={{ flex: 1 }}>
            
            {selectedTab == "Order" && <Order menuId={route.params.menuId} />}
            {/* {selectedTab == "Cart" && <CartIsEmpty />} */}
            {selectedTab == "FoodDetails" && <FoodDetails />}
            {selectedTab == "OrderHistory" && <OrderHistory />}
            {selectedTab == "Contact" && <Contact />}
            {selectedTab == "EditProfile" && <EditProfile />}

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 16,
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.lightGray,
                    borderTopWidth: 1,
                }}
            >
                {tabs.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => function() {
                                    console.log("Menu pressed");
                                    route = undefined;
                                    setSelectedTab(item.screen);    
                                }                                
                            }
                        >
                            <Image
                                source={item.icon}
                                style={{
                                    height: 24,
                                    width: "100%",
                                    tintColor:
                                        selectedTab == item.screen
                                            ? COLORS.red
                                            : COLORS.gray2,
                                    marginBottom: 10,
                                }}
                                resizeMode="contain"
                            />
                            <Text
                                style={{
                                    ...FONTS.Roboto_400Regular,
                                    fontSize: 14,
                                    lineHeight: 14 * 1,
                                    color:
                                        selectedTab == item.screen
                                            ? COLORS.red
                                            : COLORS.gray2,
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
