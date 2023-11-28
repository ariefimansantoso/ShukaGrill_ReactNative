import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

import {
    Header,
    Star,
    Button,
    Heart,
    Add,
    ItemComponentOne,
    Heading,
} from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES, ActiveMenu, baseUrl, baseImageUrl } from "../constants";

export default function FoodDetails() {
    const [isLoading, setLoading] = useState(true);
    const [menus, setMenus] = useState([]);

    const navigation = useNavigation();
    const route = useRoute();
    const getActiveMenu = async () => {
        try {
            //console.log("baseUrl: " + baseUrl);
          const requestUrl = baseUrl + '/api/Menu/ActiveMenu';
          //console.log(requestUrl);
          const response = await fetch(requestUrl, 
            {   
                method: "GET",       
                headers: {  "Content-type": "application/json" }
            });
          const json = await response.json();
          //console.log("RESPJSON: " + json);                   
          setMenus(json);
        } catch (error) {
            console.log("Error: " + error);
          console.error(error);
        } finally {
            //console.log("Set Loading False");
            //console.log(isLoading);
          setLoading(false);
          //console.log(isLoading);
        }
      };

    function renderDetails(dish) {        
        //console.log(baseImageUrl + dish.ImageUrl);
        //console.log("renderDetails FoodDetails: " + dish.Id);
        return (            
            <View
                style={{
                    marginHorizontal: 30,
                    marginTop: 30,
                    marginBottom: 20,
                }}
                key={dish.Id}
            >
                <Image
                    source={{ uri: baseImageUrl + dish.ImageUrl }}
                    style={{
                        height: 206,
                        width: "100%",
                        borderRadius: 14,
                        marginBottom: 21,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Text
                        style={{
                            marginBottom: 8,
                            ...FONTS.Roboto_500Medium,
                            fontSize: 18,
                            textTransform: "capitalize",
                            color: COLORS.black,
                        }}
                    >
                        {dish.Name}
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
                    >
                        <Text
                            style={{ ...FONTS.Roboto_500Medium, fontSize: 16 }}
                        >
                            {dish.Rating}
                        </Text>
                        <View style={{ marginHorizontal: 6 }}>
                            <Star />
                        </View>
                        {/* <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                                color: COLORS.gray2,
                            }}
                        >
                            120 Review
                        </Text> */}
                    </View>
                </View>
                <Text
                    style={{
                        marginBottom: 12,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 14,
                        color: COLORS.gray2,
                        lineHeight: 14 * 1.4,
                        marginBottom: 10,
                    }}
                >
                    {dish.Description.trim()}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_500Bold,
                            fontSize: 14,
                            color: COLORS.black,
                        }}
                    >
                        Anak 6-12:
                    </Text>
                    
                    <Text
                        style={{
                            ...FONTS.Roboto_500Bold,
                            fontSize: 14,
                            color: COLORS.black,
                        }}
                    >
                        Dewasa:   
                    </Text>

                    <Text
                        style={{
                            ...FONTS.Roboto_500Bold,
                            fontSize: 14,
                            color: COLORS.black,
                        }}
                    >
                        Senior 60:
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 25,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 20,
                            color: COLORS.carrot,
                        }}
                    >
                        {dish.PriceChildren.toLocaleString("id-ID")}++
                    </Text>
                    
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 20,
                            color: COLORS.carrot,
                        }}
                    >
                        {dish.Price.toLocaleString("id-ID")}++
                    </Text>

                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 20,
                            color: COLORS.carrot,
                        }}
                    >
                        {dish.PriceSenior.toLocaleString("id-ID")}++
                    </Text>
                </View>
                <Button
                    title="Order Now"
                    containerStyle={{ 
                        marginBottom: 33,
                        backgroundColor: COLORS.red, }}
                    onPress={() => {
                        navigation.navigate('MainLayout', {
                            openTab: "Order",
                            menuId: dish.Id,
                        });
                        //navigation.navigate("Order");
                    }}
                />
            </View>
        );
    }

    function renderRecommended() {
        return (
            <View>
                <Heading
                    title="Recommended"
                    fontStyle={{ ...FONTS.Roboto_500Medium, fontSize: 18 }}
                />
                <FlatList
                    data={dishes}
                    horizontal={true}
                    contentContainerStyle={{
                        paddingLeft: 30,
                        paddingBottom: 30,
                        paddingVertical: 21,
                    }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            item.recommended === true && (
                                <ItemComponentOne item={item} />
                            )
                        );
                    }}
                />
            </View>
        );
    }

     useEffect(() => {       
         getActiveMenu();
       }, []);

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            {/* <Header title="Food Details" onPress={() => navigation.goBack()} /> */}
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            > */}
            {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={menus}
          keyExtractor={({Id}) => Id}
          renderItem={({item}) => (
            renderDetails(item)
          )}
        />
      )}
                {/* {menus.forEach(dish => {                        
                        return (                            
                            renderDetails(dish)
                        );
                })}   */}
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}
