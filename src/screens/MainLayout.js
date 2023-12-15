import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { tabs, COLORS, FONTS, dishes } from "../constants";

import HomeOne from "./Home";
import FoodDetails from "./FoodDetails";
import CartIsEmpty from "../screens/CartIsEmpty";
import Contact from "../screens/Contact";
import EditProfile from "../screens/EditProfile";
import OrderHistory from "../screens/OrderHistory";
import Order from "../screens/Order";
import OrderSuccessful  from "./OrderSuccessful";

export default function MainLayout({ route }) {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState(route && route.params ? route.params.openTab : "FoodDetails");
    //const { openTab, menuId } = route.params;
    //console.log("route params: " + route.params);
    //console.log("selectdTab: " + selectedTab);

    /* if(route.params && selectedTab != "Order") {
        navigation.navigate("Order", { menuId: route.params.menuId });
    } */
    //console.log("openTab: " + route.params.openTab);
     if(route.params){
        //console.log("params: " + JSON.stringify(route.params));
        if(route.params.openTab != selectedTab) {
            console.log("openTab: " + JSON.stringify(route.params.openTab));
            setSelectedTab(route.params.openTab);
            //navigation.setParams(undefined);
        }
    }    

    return (
        
        <View style={{ flex: 1 }}>        
            {console.log("selectedTab: " + selectedTab)}
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
                    //console.log(item);
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                console.log("item.screen: " + item.screen);
                                navigation.setParams({ openTab: item.screen });                                
                                setSelectedTab(item.screen);
                            }}
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
