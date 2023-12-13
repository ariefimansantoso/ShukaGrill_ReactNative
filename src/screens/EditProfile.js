import {
    View,
    TextInput,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { EditProfileCategory, Header, Button } from "../components";
import { SAFEAREAVIEW, FONTS, COLORS, SIZES, getUser, baseUrl } from "../constants";

export default function EditProfile() {
    const navigation = useNavigation();

    // current user 
    const [userEmail, setUserEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [lastname, setLastname] = useState("");

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
    }, []);

    useEffect(() => {
        getProfile();
    }, [userEmail]);

    function getProfile() {
        const requestCheckoutOptions = {   
            method: "GET",       
            headers: {  "Content-type": "application/json" },
            redirect: 'follow'
        };
       
        console.log("getProfile: " + userEmail);
        const requestCheckoutUrl = baseUrl + '/api/Profile?email=' + userEmail;       
        return fetch(requestCheckoutUrl, requestCheckoutOptions).then(respx => respx.json())
        .then(transx => {
            console.log("transx: " + JSON.stringify(transx));
            //console.log(transx.User);
            //console.log(transx.Url);
            if(transx.User) {
                let msg = transx.User + "\nKamu harus login dulu dengan Gmail kamu.";
                Alert.alert('Perhatian!', msg, [      
                    {text: 'OK', onPress: () => { 
                            navigation.navigate('OnBoarding');
                        }},
                ]); 
            }

            setFullname(transx.FullName);
            setLastname(transx.LastName);        
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
                    Edit Profil
                </Text>
            </View>
        );
    }

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <EditProfileCategory
                    title="Nama Depan"
                    va
                />
                <EditProfileCategory
                    title="Nama Belakang"
                    placeholder="Santoso"
                />
                <EditProfileCategory
                    title="Email"
                    placeholder="ariefimansantoso@gmail.com"
                />
                <EditProfileCategory
                    title="Address"
                    placeholder="Jln. Kasuari VI blok HB7/17"
                />
                <EditProfileCategory
                    title="Phone Number"
                    placeholder="+6281218550163"
                />                
                
                
                <Button
                    title="Ubah Profil"
                    containerStyle={{
                        backgroundColor: COLORS.red,
                        marginBottom: 20,
                    }}
                    onPress={() => {
                        
                       

                    }}
                />
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate("ChangePassword")}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 16,
                            textAlign: "center",
                            color: COLORS.green,
                        }}
                    >
                        Change Password
                    </Text>
                </TouchableOpacity> */}
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
           {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
