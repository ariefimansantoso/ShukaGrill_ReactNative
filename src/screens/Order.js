import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState }  from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/native";
import { Rating, AirbnbRating } from "react-native-ratings";
import DashedLine from "react-native-dashed-line";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Shadow } from "react-native-shadow-2";
import NumericInput from 'react-native-numeric-input'
import { SelectList } from 'react-native-dropdown-select-list';

import {
    Header,
    Empty,
    Button,
    Minus,
    Plus,
    InputField,
    BasketTwo,
    Star
} from "../components";
import { COLORS, SAFEAREAVIEW, FONTS, SIZES, baseUrl, baseImageUrl } from "../constants";

const dishes = [
    {
        id: "1",
        name: "Caramel cake with beries",
        compound: "Sells food, either fresh, specie, chili",
        presentationImage: require("../assets/images/dishes/dish-01-01.png"),
        popularDeal: true,
        bestMeal: true,
        recommended: true,
        price: 199000,
        rating: 4.5,
        image: require("../assets/images/dishes/dish-01-02.png"),
        description:
            "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
        weight: "350",
        qty: 1,
    }
];

export default function Order(menuId){
    const navigation = useNavigation();
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = React.useState("");
    const [selectedMenu, setSelectedMenu] = useState({});    
    const [dataFetched, setDataFetched] = useState(false);
    const [cart, setCart] = useState({});

    const httpHeader = {   
        method: "GET",       
        headers: {  "Content-type": "application/json" }
    };

    /* if(menuId) {
        console.log("menuId: " + menuId.route.params.menuId);
        console.log(menuId.route.params.menuId);        
    }    */ 

    useEffect(() => {
        if(dataFetched == true){
            return;
        }

        const fetchData = () => {
            console.log("useEffect");
            // branches
            const requestMenuUrl = baseUrl + '/api/Menu/GetMenu?id=' + menuId.route.params.menuId;                
            const fetchMenuResponse = fetch(requestMenuUrl, httpHeader).then(r => r.json());
            fetchMenuResponse.then(res => {
                const requestBranchesUrl = baseUrl + '/api/Branch/Get';
                return fetch(requestBranchesUrl, httpHeader)
                .then(resp => resp.json())
                .then(trans => {
                
                    //console.log(res);
                    // menu
                    const menuJson = res; 
                    //console.log("getMenu success");
                    //console.log(menuJson);
                    setSelectedMenu(menuJson);  

                    //console.log(trans); 
                    const branchesJson = trans;
                    var objectDropdownArray = [];
                    var selectedBranchId = branchesJson[0].ID;
                    //console.log("Total Branches: " + branchesJson.length);
                    for(var i = 0; i < branchesJson.length; i++) {
                        objectDropdownArray.push({ 
                            key: branchesJson[i].ID,
                            value:branchesJson[i].BranchName
                        });
                    }                        
                    setBranches(objectDropdownArray);

                    const raw = JSON.stringify({
                        "MenuID": menuId.route.params.menuId,
                        "BranchID": selectedBranchId,
                        "Pax": 1,
                        "PaxChildren": 0,
                        "PaxSenior": 0
                      });
                    var urlencoded = new URLSearchParams();
                    urlencoded.append("MenuID", menuId.route.params.menuId);
                    urlencoded.append("BranchID", selectedBranchId);
                    urlencoded.append("Pax", 1);
                    urlencoded.append("PaxChildren", 0);
                    urlencoded.append("PaxSenior", 0);
                    const requestOptions = {   
                        method: "GET",       
                        headers: {  "Content-type": "application/x-www-form-urlencoded" },
                        body: urlencoded,
                        redirect: 'follow'
                    };
                    //console.log(raw);
                    const requestOrderUrl = baseUrl + '/api/Order/Get';
                    //var url = new URL(requestOrderUrl);                    
                    //Object.keys(raw).forEach(key => url.searchParams.append(key, raw[key]))
                    return fetch(requestOrderUrl, requestOptions).then(respx => respx.json())
                    .then(transx => {
                        //const orderJson = trans.json();
                        console.log(transx); 
                        setDataFetched(true);
                    });                            
                });
            });               
        };
        fetchData();
    }, []);

    function renderItem(data) {
        //console.log(data);
        //console.log("renderItem");
        
        return (
            
                
            <View
                style={{
                    marginHorizontal: 30,
                    marginTop: 30,
                    marginBottom: 20,
                    flex: 1
                }}
                key={data.Id}
            >
           
                <Image
                    source={{ uri: baseImageUrl + data.ImageUrl }}
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
                        {data.Name}
                    </Text>
                    <View
                        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
                    >
                        <Text
                            style={{ ...FONTS.Roboto_500Medium, fontSize: 16 }}
                        >
                            {data.Rating}
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
                        </Text>  */}
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
                    {data.Description.trim()}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >                                        
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginBottom: 8 }}>
                        <View style={{flex: 1}}>
                            <Text
                                style={{
                                    ...FONTS.Roboto_500Bold,
                                    fontSize: 14,
                                    color: COLORS.black,
                                }}
                            >
                                Anak 6-12:
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text
                                style={{
                                    ...FONTS.Roboto_700Bold,
                                    fontSize: 16,
                                    color: COLORS.red,
                                    marginRight:10,
                                    textAlign: 'right'
                                }}
                            >
                                {parseInt(data.PriceChildren).toLocaleString('id-ID')}++
                            </Text>
                        </View>
                    </View>
                    <NumericInput minValue={0} onChange={value => console.log(value)} />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop:30
                    }}
                >                                        
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginBottom: 8 }}>
                        <View style={{flex: 1}}>
                            <Text
                                style={{
                                    ...FONTS.Roboto_500Bold,
                                    fontSize: 14,
                                    color: COLORS.black,
                                }}
                            >
                                Dewasa:
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text
                                style={{
                                    ...FONTS.Roboto_700Bold,
                                    fontSize: 16,
                                    color: COLORS.red,
                                    marginRight:10,
                                    textAlign: 'right'
                                }}
                            >
                                {data.Price.toLocaleString("id-ID")}++
                            </Text>
                        </View>
                    </View>
                    <NumericInput minValue={0} initValue={1} onChange={value => console.log(value)} />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop:30
                    }}
                >                                        
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginBottom: 8 }}>
                        <View style={{flex: 1}}>
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
                        <View style={{flex: 1}}>
                            <Text
                                style={{
                                    ...FONTS.Roboto_700Bold,
                                    fontSize: 16,
                                    color: COLORS.red,
                                    marginRight:10,
                                    textAlign: 'right'
                                }}
                            >
                                {data.PriceSenior.toLocaleString("id-ID")}++
                            </Text>
                        </View>
                    </View>
                    <NumericInput minValue={0} initValue={0} onChange={value => console.log(value)} />
                </View>  
                        
            </View>
            
               
        );
    }

    const getMenu = async () => {
        console.log("getMenu called: " + menuId.route.params.menuId);
        try {          
          const requestUrl = baseUrl + '/api/Menu/GetMenu?id=' + menuId.route.params.menuId;
          console.log(requestUrl);
          const response = await fetch(requestUrl, 
            {   
                method: "GET",       
                headers: {  "Content-type": "application/json" }
            });
          const json = await response.json(); 
          console.log("getMenu success");
            console.log(json);
          setSelectedMenu(json);
        } catch (error) {
            console.log("Error: " + error);
        } finally {
           
          setLoading(false);
          
        }
      };

    ///api/Branch/Get
    const getBranches = async () => {
        try {          
          const requestUrl = baseUrl + '/api/Branch/Get';
          const response = await fetch(requestUrl, 
            {   
                method: "GET",       
                headers: {  "Content-type": "application/json" }
            });
          const json = await response.json(); 
          var objectDropdownArray = [];
          console.log("Total Branches: " + json.length);
          for(var i = 0; i < json.length; i++) {
            objectDropdownArray.push({ 
                key: json[i].ID,
                value:json[i].BranchName
            });
          }                        
          setBranches(objectDropdownArray);
        } catch (error) {
            console.log("Error: " + error);
        } finally {
           
          setLoading(false);
          
        }
      };

    function renderFooterComponent() {
        return (
            <View style={{paddingHorizontal: 30}}>                                
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ ...FONTS.Roboto_700Bold, fontSize: 14 }}>
                        Sub Total:
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 14,
                            color: COLORS.red,
                        }}
                    >
                        {" "}
                        $200.00
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ ...FONTS.Roboto_700Bold, fontSize: 14 }}>
                        Diskon 10%:
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 14,
                            color: COLORS.red,
                        }}
                    >
                        {" "}
                        $200.00
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ ...FONTS.Roboto_700Bold, fontSize: 14 }}>
                        Sub Total Setelah Diskon:
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 14,
                            color: COLORS.red,
                        }}
                    >
                        {" "}
                        $200.00
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ ...FONTS.Roboto_700Bold, fontSize: 14 }}>
                        Pajak PB1 10%:
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 14,
                            color: COLORS.red,
                        }}
                    >
                        {" "}
                        $200.00
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ ...FONTS.Roboto_700Bold, fontSize: 14 }}>
                        Service Charge:
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 14,
                            color: COLORS.red,
                        }}
                    >
                        {" "}
                        $200.00
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: 10,
                    }}
                >
                    <Text style={{ ...FONTS.Roboto_700Bold, fontSize: 14 }}>
                        Grand Total:
                    </Text>
                    <Text
                        style={{
                            ...FONTS.Roboto_700Bold,
                            fontSize: 14,
                            color: COLORS.red,
                        }}
                    >
                        {" "}
                        $200.00
                    </Text>
                </View>
                <Button
                    title="Process to Checkout"
                    onPress={() => navigation.navigate("PaymentMethodOne")}
                    containerStyle={{ 
                        marginBottom: 33,
                        backgroundColor: COLORS.red, }}
                />
            </View>
        );
    }

    function renderHiddenItem({ data }) {
        return (
            <TouchableOpacity
                style={{
                    alignSelf: "flex-end",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
                onPress={() => console.log("Remove Item")}
            >
                <BasketTwo />
            </TouchableOpacity>
        );
    }

    function renderSwipeListView() {
        if(Object.keys(selectedMenu).length === 0 && selectedMenu.constructor === Object) {
            return;
        }

        //console.log(selectedMenu);
        return renderItem(selectedMenu);
            {/* <SwipeListView
                data={dishes}
                renderItem={(data, rowMap) => renderItem(data)}
                // renderHiddenItem={(data, rowMap) => renderHiddenItem(data)}
                showsVerticalScrollIndicator={false}
                rightOpenValue={-85}
                contentContainerStyle={{
                    paddingHorizontal: 0,
                    paddingVertical: SIZES.paddingTop_01,
                }}
                ListFooterComponent={() => renderFooterComponent()}
                closeOnRowPress={true}
                closeOnRowOpen={true}
                closeOnRowBeginSwipe={true}
                disableRightSwipe={true}
            /> */}            
        
    }

    function renderBranches() {
        return (
            <View style={{paddingHorizontal: 30}}>
                <View style={{ marginTop: 15 }}>
                    <DashedLine
                        dashLength={10}
                        dashThickness={1}
                        dashGap={5}
                        dashColor={COLORS.gray2}
                        dashStyle={{ borderRadius: 5 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Text
                        style={{
                            marginBottom: 0,
                            marginTop:18,
                            ...FONTS.Roboto_500Medium,
                            fontSize: 14,
                            textTransform: "capitalize",
                            color: COLORS.black,
                        }}
                    >
                        Pilih cabang Shuka Gril yang akan dikunjungi:
                    </Text>                    
                </View>
                <View
                    style={{
                        height: 50,
                        width: "100%",
                        borderWidth: 0,
                        borderRadius: 10,
                        marginBottom: 18,
                        marginTop:5,
                        borderColor: "#D7D7D7",
                        justifyContent: "left",
                        paddingHorizontal: 0,
                    }}
                >
                    <SelectList 
                        setSelected={(val) => setSelectedBranch(val)} 
                        data={branches} 
                        style={{ flex: 1 }}
                        boxStyles={{
                            width: "100%",
                            borderWidth: 1,
                            borderRadius: 10,
                            marginBottom: 18,
                            marginTop: 0,
                            borderColor: "#D7D7D7",
                            paddingHorizontal: 15,
                            marginHorizontal: 0
                        }}
                        dropdownStyles={{
                            backgroundColor: "#ffffff"
                        }}
                        save="value"
                    />
                </View>
                <View style={{ marginBottom: 27 }}>
                    <DashedLine
                        dashLength={10}
                        dashThickness={1}
                        dashGap={5}
                        dashColor={COLORS.gray2}
                        dashStyle={{ borderRadius: 5 }}
                    />
                </View>               
            </View>
        );
    }    

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea, paddingTop: 10 }}>
            <Header title="Order" onPress={() => navigation.navigate("MainLayout")} style={{ marginTop: 20 }} />            
            <ScrollView style={{ flex: 1 }} behavior="padding">
                {renderSwipeListView()}
                {renderBranches()}
                {renderFooterComponent()}
            </ScrollView>
        </SafeAreaView>
    );
}
