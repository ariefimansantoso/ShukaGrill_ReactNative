import {
    View,
    TextInput,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { EditProfileCategory, Header, Button } from "../components";
import { SAFEAREAVIEW, FONTS, COLORS, SIZES } from "../constants";

export default function EditProfile() {
    const navigation = useNavigation();

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
                    placeholder="Arief Iman"
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
                    onPress={() => navigation.goBack()}
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
