import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, Link } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";
import { Header, InputField, Button } from "../components";

export default function Terms() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        color: COLORS.red,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    Pembaruan terakhir 08 Januari 2024
                </Text>

                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    Syarat dan Ketentuan ini akan kami perbarui secara berkala dan apabila dibutuhkan dan tanpa pemberitahuan.
                </Text>
                
                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 18,
                        color: COLORS.black,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    1. Persyaratan
                </Text>

                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    Dengan menggunakan aplikasi ini, anda setuju dengan Syarat dan Ketentuan, dan segala akibat hukum yang berlaku di wilayah Republik Indonesia.
                </Text>
                
                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 18,
                        color: COLORS.black,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    2. Lisensi Penggunaan
                </Text>

                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    Anda berhak menggunakan seluruh, maupun sebagian dari aplikasi ini, dan data yang anda kirim adalah milik anda sebagai pengguna seutuhnya. Aplikasi Shuka Grill ini adalah milik PT MITRA BOGA PERSADA, kami berhak mencabut hak guna aplikasi anda apabila ditemukan pelanggaran-pelanggaran berupa:
                    {"\n\n"}
                    1. Plagiarisasi materi dan isi didalam aplikasi ini;{"\n"}
                    2. Penggunaan material didalam aplikasi ini untuk tujuan komersial maupun non-komersial tanpa seijin PT MITRA BOGA PERSADA;{"\n"}
                    3. Decompile atau melakukan reverse engineering pada aplikasi ini;{"\n"}
                    4. Mengubah isi, atau mengambil isi dan me-redistribusikan isi aplikasi ini tanpa ijin; atau{"\n"}
                    5. Menduplikat aplikasi dan seisinya pada server lain.                                    
                </Text>

                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 18,
                        color: COLORS.black,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    3. Syarat dan Ketentuan Promo Buy 3 Get 4
                </Text>

                <Text
                    style={{
                        textAlign: "left",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >
                    1. Maksimal reservasi per sesi 10 pax{"\n"}
                    2. Minimal pembelian paket spesial, berlaku kelipatan{"\n"}
                    3. Hanya berlaku di weekday, weekend (Sabtu dan Minggu) tidak berlaku{"\n"}
                    4. Tidak dapat digabungkan dengan promo lainnya{"\n"}
                    5. Jumlah reservasi tidak dapat dikurangi, dibatalkan dan di-reschedule{"\n"}
                    6. Berlaku di seluruh outlet Shukaku/ShukaGrill (kecuali Garut dan Tasikmalaya)                  
                </Text>                

                <TouchableOpacity
                    onPress={() => navigation.navigate("MainLayout", {
                        openTab: "Contact"
                    })}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 16,
                            textAlign: "center",
                            color: COLORS.red,
                        }}
                    >
                        Kembali ke Kontak
                    </Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        );
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
                    Syarat dan Ketentuan
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
