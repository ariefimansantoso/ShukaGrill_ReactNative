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

export default function Privacy() {
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
                    Kebijakan Privasi ini akan kami perbarui secara berkala dan apabila dibutuhkan dan tanpa pemberitahuan.
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
                    1. Tujuan
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
                    Kebijakan Privasi ini bertujuan untuk membantu Anda memahami informasi yang kami kumpulkan, alasan kami mengumpulkannya, dan cara untuk memperbarui, dan menghapus informasi Anda.
                    {"\n\n"}
                    Kami menyajikan layanan order online yang kami kelola secara mandiri dan pembayaran online yang dikelola terpisah oleh partner kami Midtrans, Midtrans adalah penyedia layanan pembayaran online yang terkemuka di Indonesia dan sudah memiliki ijin dari Bank Indonesia maupun Kementrian Komunikasi dan Informatika RI serta memiliki fitur keamanan kelas dunia yang handal dan sudah bersertifikat ISO 27001. Dalam menyelenggarakan layanan ini kami membutuhkan beberapa informasi pribadi dari anda, informasi-informasi tersebut adalah tertera di bab berikut.

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
                    2. Informasi
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
                    Informasi yang kami kumpulkan meliputi:
                    {"\n\n"}
                    1. Nomor HP{"\n"}
                    2. Nama Lengkap{"\n"}
                    3. Alamat Lengkap{"\n"}
                    4. Alamat Email{"\n"}
                    {"\n"}
                    Informasi tersebut kami kumpulkan untuk tujuan layanan order dan pembayaran online.
                    {"\n\n"}
                    Nomor HP: Untuk mengidentifikasi akun anda;{"\n\n"}
                    Nama: Untuk mengidentifikasi akun dan pembayaran online, serta menghindari penyalahgunaan alat pembayaran online (Kartu Kredit, Internet Banking, dan sejenisnya);{"\n"}{"\n"}
                    Alamat Lengkap: Untuk melengkapi data pada saat melakukan proses pembayaran online;{"\n"}{"\n"}
                    Alamat Email: Untuk melakukan komunikasi dengan anda mengenai status pembayaran online.{"\n"}{"\n"}                  
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
                    3. Penyimpanan Data
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
                    Data anda kami simpan secara aman dan rahasia pada datacenter yang dilengkapi dengan fitur keamanan kelas dunia.{"\n"}{"\n"}
                    Ketika melakukan pembayaran online, kami mengirimkan sebagian data anda (Nama, Alamat, dan Email) kepada Midtrans sebagai persyaratan validasi pembayaran.                  
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
                    4. Penghapusan Data
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
                    Apabila anda ingin menghapus data (sebagian atau seluruh data) atau akun anda, anda dapat menghubungi manajemen Shuka Grill pada email management@mitrabogapersada.com                  
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
                    Kebijakan Privasi
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
