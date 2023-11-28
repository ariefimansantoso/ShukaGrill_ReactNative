import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlashMessage from "react-native-flash-message";

import {
    OnBoarding,
    SignIn,
    SignUp,
    LogIn,
    MainLayout,
    ForgotPassword,
    OtpCode,
    AccountCreated,
    Selectlocation,
    SignUpWith,
    Home,
    Profile,
    MyList,
    Order,
    RestaurantMenu,
    FoodDetails,
    Notifications,
    OrderHistory,
    AddPaymentMethod,
    EditProfile,
    FavoriteList,
    FAQ,
    MyPromocodes,
    Category,
    CartIsEmpty,
    OrderSuccessful,
    Filter,
    BestMeal,
    PaymentMethodOne,
    PaymentMethodTwo,
    PasswordHasBeenReset,
    NewPassword,
    VerifyYourPhoneNumber,
    ConfirmationCode,
    AddNewCard,
    ChangePassword,
} from "../screens";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerShown: false,
                }}
                initialRouteName="OnBoarding"
            >
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignUpWith" component={SignUpWith} />
                <Stack.Screen name="MyList" component={MyList} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FoodDetails" component={FoodDetails} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="FavoriteList" component={FavoriteList} />
                <Stack.Screen name="FAQ" component={FAQ} />
                <Stack.Screen name="MyPromocodes" component={MyPromocodes} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="CartIsEmpty" component={CartIsEmpty} />
                <Stack.Screen name="Filter" component={Filter} />
                <Stack.Screen name="BestMeal" component={BestMeal} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="AddNewCard" component={AddNewCard} />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                />
                <Stack.Screen
                    name="ConfirmationCode"
                    component={ConfirmationCode}
                />
                <Stack.Screen
                    name="VerifyYourPhoneNumber"
                    component={VerifyYourPhoneNumber}
                />
                <Stack.Screen
                    name="PasswordHasBeenReset"
                    component={PasswordHasBeenReset}
                />
                <Stack.Screen
                    name="PaymentMethodTwo"
                    component={PaymentMethodTwo}
                />
                <Stack.Screen
                    name="PaymentMethodOne"
                    component={PaymentMethodOne}
                />
                <Stack.Screen
                    name="OrderSuccessful"
                    component={OrderSuccessful}
                />
                <Stack.Screen
                    name="AddPaymentMethod"
                    component={AddPaymentMethod}
                />
                <Stack.Screen
                    name="RestaurantMenu"
                    component={RestaurantMenu}
                />
                <Stack.Screen
                    name="Selectlocation"
                    component={Selectlocation}
                />
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen
                    name="AccountCreated"
                    component={AccountCreated}
                />
                <Stack.Screen name="MainLayout" component={MainLayout} />
                <Stack.Screen name="OtpCode" component={OtpCode} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    );
}
