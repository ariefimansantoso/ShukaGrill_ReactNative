import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Empty, Button } from "../components";
import { COLORS, FONTS } from "../constants";

function renderContent() {
    const navigation = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 30,
                backgroundColor: COLORS.white,
            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ marginBottom: 52 }}>
                <Empty />
            </View>
            <Text
                style={{
                    ...FONTS.Roboto_700Bold,
                    fontSize: 20,
                    color: COLORS.red,
                    textTransform: "capitalize",
                    marginBottom: 5,
                }}
            >
                Keranjangmu masih kosong
            </Text>
            <Text
                style={{
                    ...FONTS.Roboto_400Regular,
                    fontSize: 14,
                    marginBottom: 26,
                    color: COLORS.gray2,
                }}
            >
                Looks like you haven't made your order yet.
            </Text>
            <Button
                containerStyle={{ backgroundColor: COLORS.red }}
                title="Lihat Menu" onPress={() => {
                    navigation.navigate("MainLayout")
                }}
            />
        </ScrollView>
    );
}

export default function CartIsEmpty() {
    
    return <View style={{ flex: 1 }}>{renderContent()}</View>;
}
