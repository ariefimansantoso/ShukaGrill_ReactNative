import { View, Text, FlatList, Image, StyleSheet, Br, AsyncStorage } from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

import { SIZES, COLORS, FONTS, SAFEAREAVIEW, onboarding, storeUser, getUser } from "../constants";
import {
    Button,
    Triangle,
    CircleOne,
    CircleTwo,
    CircleElement,
    CircleElementTwo,
} from "../components";

export default function OnBoarding() {
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    let STORAGE_KEY = '@user_credentials';
    let userData = undefined;

    checkUser();

    function updateCurrentSlideIndex(e) {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SIZES.width);
        setCurrentSlideIndex(currentIndex);
    }

    function renderDots() {
        return (
            <View>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                <Text
                        style={{
                            marginBottom: 20,
                            textAlign: "center",
                            fontSize: 16,
                            color: COLORS.normalGrey,
                            paddingHorizontal: 10,
                            ...FONTS.Roboto_400Regular,
                        }}
                    >                                   
                    Dengan menggunakan aplikasi Shuka Grill, anda telah menyetujui {"\n"}Kebijakan Privasi dan {"\n"}Syarat dan Ketentuan.
                </Text>
                    {/* {onboarding.map((_, index) => {
                        return currentSlideIndex == index ? (
                            <View key={index} style={{ marginHorizontal: 5 }}>
                                <CircleElement />
                            </View>
                        ) : (
                            <View key={index} style={{ marginHorizontal: 5 }}>
                                <CircleElementTwo />
                            </View>
                        );
                    })} */}
                </View>
            </View>
        );
    }

    function checkUser() {
        //console.log("checkUser called");
        (async function() { 
            userData = await getUser();
            //console.log("checkUser await done");
            if(userData) {
                //console.log("token: " + userData.idToken);
                if(userData.idToken) {
                    navigation.navigate("MainLayout");
                }
            }
        })()
    }
    return (
        
        <View style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <FlatList
                data={onboarding}
                keyExtractor={(item) => item.id}
                horizontal={true}
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width,
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                
                                <Image
                                    source={item.image}
                                    style={{
                                        width: SIZES.width, // - 20,
                                        height: SIZES.height, // / 2.3,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View
                                style={{
                                    ...SIZES.width,
                                    borderTopRightRadius: 30,
                                    borderTopLeftRadius: 30,
                                    overflow: "hidden",
                                    backgroundColor: COLORS.white,
                                    paddingTop: SIZES.height / 20,
                                    paddingBottom: SIZES.height / 30,
                                    paddingHorizontal: 40,
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 30,
                                        color: COLORS.darkGray,
                                        marginBottom: SIZES.height / 50,
                                        textTransform: "capitalize",
                                        ...FONTS.Roboto_700Bold,
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        marginBottom: 25,
                                        textAlign: "center",
                                        fontSize: 16,
                                        color: COLORS.onboardingRedText,
                                        paddingHorizontal: 10,
                                        ...FONTS.Roboto_400Regular,
                                    }}
                                >
                                    {item.description}
                                </Text>
                                <Button
                                    title="Google Login"
                                    containerStyle={{
                                        marginBottom: 20,
                                        backgroundColor: COLORS.red,
                                    }}
                                    onPress={() =>
                                        //navigation.navigate("MainLayout")



                                        {
                                            GoogleSignin.configure({
                                                scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
                                                androidClientId: '531501383860-ejt27c9qkhe0699b954dpmp882rrasmo.apps.googleusercontent.com',
                                                webClientId: '531501383860-uoebtfaqee29oe69r46tl4a6ndr95ike.apps.googleusercontent.com'
                                            });

                                            GoogleSignin.hasPlayServices().then((hasPlayService) => {
                                                if (hasPlayService) {
                                                    GoogleSignin.signIn().then((userInfo) => {
                                                        storeUser(userInfo);
                                                        //console.log(JSON.stringify(userInfo));
                                                        navigation.navigate("MainLayout");
                                                    }).catch((e) => {
                                                        console.log("ERROR hasPlayServices: " + JSON.stringify(e));
                                                    })
                                                }
                                            }).catch((e) => {
                                                console.log("ERROR IS: " + JSON.stringify(e));
                                            })
                                        }
                                    }
                                />

                                {renderDots()}
                                    
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        zIndex: -1,
                                    }}
                                >
                                    <Triangle />
                                </View>
                                <View
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                    }}
                                >
                                    <CircleOne />
                                </View>
                                <View
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                    }}
                                >
                                    <CircleTwo />
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}
