import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, OrderHistoryCategory } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, history, SIZES, getUser, baseUrl } from "../constants";

export default function OrderHistory() {
    const [category, setCategory] = useState("upcoming");
    const navigation = useNavigation();

    // current user 
    const [userEmail, setUserEmail] = useState("");

    // orders
    const [orders, setOrders] = useState([]);
    const [previousOrders, setPreviousOrders] = useState([]);

    function getUserData() {
        console.log("checkUser called");
        (async function() { 
            userData = await getUser();
            //console.log("checkUser await done");
            if(userData) {
                //console.log(userData.user.email);
                if(userData.user) {
                    setUserEmail(userData.user.email);
                    console.log(userData.user.email);
                }
            }
        })()
    }

    useEffect(() => {
        getUserData();
        getOrders();
    }, [userEmail]);

    function getOrders() {
        if(!userEmail) {
            return;
        }


        const requestCheckoutOptions = {   
            method: "GET",       
            headers: {  "Content-type": "application/json" },
            redirect: 'follow'
        };
       
        console.log("getOrders: " + userEmail);
        const requestCheckoutUrl = baseUrl + '/api/Order/Orders?email=' + userEmail;       
        return fetch(requestCheckoutUrl, requestCheckoutOptions).then(respx => respx.json())
        .then(transx => {
            //console.log(transx);
            //console.log(transx.User);
            //console.log(transx.Url);
            if(transx.Message) {
                Alert.alert('Perhatian!', "Mohoh maaf, telah terjadi kendala, mohon diulang kembali. Apabila kendala masih ada, silakan hubungi kami melalui menu Kontak", [      
                    {text: 'Cancel'},
                ],
                {cancelable: false});                 
            }

            let tempUpcomingOrders = [];
            let tempHistoryOrders = [];
            for(var i = 0; i < transx.length; i++){
                if(transx[i].IsUpcoming) {
                    tempUpcomingOrders.push(transx[i]);
                }
                else {
                    tempHistoryOrders.push(transx[i]);
                }
            }
            console.log(tempHistoryOrders.length);
            console.log(tempUpcomingOrders.length);
            setOrders(tempUpcomingOrders);
            setPreviousOrders(tempHistoryOrders);
        });
    }

    function renderCategory() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: SIZES.paddingTop_01,
                    marginBottom: 30,
                }}
            >
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: "48%",
                        backgroundColor:
                            category == "upcoming"
                                ? COLORS.red
                                : COLORS.lightRed,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                    onPress={() => setCategory("upcoming")}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 16,
                            color:
                                category == "upcoming"
                                    ? COLORS.white
                                    : COLORS.red,
                        }}
                    >
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: "48%",
                        backgroundColor:
                            category == "history"
                                ? COLORS.yellow
                                : COLORS.lightYellow,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                    onPress={() => setCategory("history")}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 16,
                            color:
                                category == "history"
                                    ? COLORS.white
                                    : COLORS.yellow,
                        }}
                    >
                        History
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    function renderUpcoming() {
        return orders.map((item, index) => {

            return (
                item.IsUpcoming === true && (
                    <View key={index}>
                        <OrderHistoryCategory item={item} type={"upcoming"} />
                    </View>
                )
            );
        });
    }

    function renderHistory() {
        return previousOrders.map((item, index) => {
            return (
                item.IsUpcoming === false && (
                    <View key={index}>
                        <OrderHistoryCategory item={item} type={"completed"} />
                    </View>
                )
            );
        });
    }

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 42,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        ...FONTS.Roboto_500Medium,
                        color: COLORS.black,
                        textTransform: "capitalize",
                    }}
                >
                    Orderku
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                }}
                showsVerticalScrollIndicator={false}
            >
                {renderCategory()}
                {category === "upcoming" ? renderUpcoming() : renderHistory()}
            </ScrollView>
        </SafeAreaView>
    );
}
