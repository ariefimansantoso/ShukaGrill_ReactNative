import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
    Header,
    Cancel,
    NotificationCategory,
    Wallet,
    Promo,
    Accept,
} from "../components";
import { SAFEAREAVIEW } from "../constants";

export default function Notifications() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="Notifications" onPress={() => navigation.goBack()} />
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    paddingTop: 37,
                }}
            >
                <NotificationCategory
                    title="Your Order Cancel"
                    subtitle="Order #107 has been cancelled"
                    icon={<Cancel />}
                />
                <NotificationCategory
                    title="Payment"
                    subtitle="Thank you! Your transaction is com..."
                    icon={<Wallet />}
                />
                <NotificationCategory
                    title="Promotion"
                    subtitle="Invite friends - Get 1 coupons"
                    icon={<Promo />}
                />
                <NotificationCategory
                    title="Your Order Accept"
                    subtitle="Order #107 has been success..."
                    icon={<Accept />}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
