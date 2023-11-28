import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { useNavigation } from "@react-navigation/native";

import { Header, QuestionOpen, QuestionClose } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";

const CONTENT = [
    {
        title: "How to send my package ?",
        content:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out, graphic or web designs. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
        title: "Can i change pick up location ?",
        content:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out, graphic or web designs. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
        title: "How to Edit Profile ?",
        content:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out, graphic or web designs. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
        title: "Can i send a fragile package ?",
        content:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out, graphic or web designs. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
        title: "How to send my package ?",
        content:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out, graphic or web designs. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
        title: "Can i change pick up location ?",
        content:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out, graphic or web designs. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
];

export default function FAQ() {
    const navigation = useNavigation();
    const [activeSections, setActiveSections] = useState([]);

    const setSections = (sections) => {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    };

    const renderHeader = (section, _, isActive) => {
        return (
            <View
                duration={400}
                style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        ...FONTS.Roboto_500Medium,
                        fontSize: 16,
                        color: COLORS.black,
                    }}
                >
                    {section.title}
                </Text>
                {isActive ? <QuestionOpen /> : <QuestionClose />}
            </View>
        );
    };

    const renderContent = (section, _, isActive) => {
        return (
            <View style={{ paddingVertical: 13 }} transition="backgroundColor">
                <Text
                    style={{
                        color: COLORS.gray2,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 15,
                    }}
                >
                    {section.content}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="FAQ"
                onPress={() => navigation.goBack()}
                titleStyle={{ textTransform: "uppercase" }}
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingTop_01,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Accordion
                    activeSections={activeSections}
                    sections={CONTENT}
                    touchableComponent={TouchableOpacity}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setSections}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
