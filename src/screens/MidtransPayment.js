import React from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";

export default function MidtransPayment({ route }) {
    const navigation = useNavigation();
    const { uri } = route.params;
    console.log(uri);
    console.log(route);

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <WebView 
            javaScriptEnabled={true}
            javaScriptCanOpenWindowsAutomatically={true}
            domStorageEnabled={true}
            cacheEnabled={true}
            allowFileAccessFromFileURLs={true}
            allowFileAccess={true}
            cacheMode="LOAD_NO_CACHE"
            source={{ uri: uri  }} 
            onNavigationStateChange={(data) => {
                console.log(data.url);
                if(data.url.indexOf("order_id") > -1) {
                    // http://example.com/?order_id=SHUKAKU-061220230246175871&status_code=201&transaction_status=pending
                    let order_id = getParameterByName("order_id", data.url);                    
                    navigation.navigate("OrderSuccessful");
                }
            }}
          />
        </SafeAreaView>
      );
}

function _onNavigationStateChange(webViewState){
    console.log(webViewState.url)
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) {
        name = 'id';
        regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    };

    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}