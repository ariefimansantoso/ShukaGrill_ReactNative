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
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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
        getProfile();
    }, [userEmail]);

    function getProfile() {
        if(!userEmail) {
            return;
        }


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
                let msg = "Kamu belum punya profile, harus login dulu dengan Gmail kamu.";
                Alert.alert('Perhatian!', msg, [      
                    {text: 'OK', onPress: () => { 
                            navigation.navigate('OnBoarding');
                        }},
                ]); 
            }

            setFullname(transx.FullName);
            setLastname(transx.LastName);   
            setAddress(transx.Address);
            setPhone(transx.PhoneNumber);
        });
    }

    function saveProfile() {

        const postData = JSON.stringify({
            "FullName": fullname,
            "LastName": lastname,
            "Address": address,
            "Email": userEmail
        });

        //console.log(postData);
        var urlencoded = new URLSearchParams();
        urlencoded.append("FullName", fullname);
        urlencoded.append("LastName", lastname);
        urlencoded.append("Address", address);
        urlencoded.append("Email", userEmail);

        const requestCheckoutOptions = {   
            method: "POST",       
            headers: {  "Content-type": "application/json" },
            body: postData,
            redirect: 'follow'
        };
        console.log(requestCheckoutOptions);
        const requestCheckoutUrl = baseUrl + '/api/Profile';       
        fetch(requestCheckoutUrl, requestCheckoutOptions).then(respx => respx.json())
        .then(transx => {
            console.log("transx: " + JSON.stringify(transx));
            //console.log(transx.User);
            //console.log(transx.Url);
            if(transx.User) {
                if(transx.User == "updated") {
                    let msg = "Profile kamu telah sukses di update.";
                    Alert.alert('Perhatian!', msg, [      
                        {text: 'OK', onPress: () => { 
                                navigation.navigate('MainLayout', {
                                    openTab: "EditProfile"
                                });
                            }},
                    ]); 
                }
            }

        })
        .catch(error => {
            console.log('error', error);
            Alert.alert('Perhatian!', "Mohoh maaf, telah terjadi kendala, mohon diulang kembali. Apabila kendala masih ada, silakan hubungi kami melalui menu Kontak", [      
                {text: 'Cancel'},
            ],
            {cancelable: false});    
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
                    value={fullname.toString()}
                    funcSetValue={value => setFullname(value)}
                />
                <EditProfileCategory
                    title="Nama Belakang"
                    value={lastname}
                />
                <EditProfileCategory
                    title="Email"
                    value={userEmail}
                />
                <EditProfileCategory
                    title="Address"
                    value={address}
                />
                <EditProfileCategory
                    title="Phone Number"
                    value={phone}
                />                
                
                
                <Button
                    title="Ubah Profil"
                    containerStyle={{
                        backgroundColor: COLORS.red,
                        marginBottom: 20,
                    }}
                    onPress={() => saveProfile()}
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
