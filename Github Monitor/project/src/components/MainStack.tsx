import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./screens/auth/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { DroneServiceList } from "./screens/services/DroneServiceList";
import { ServiceBookingScreen } from "./screens/ServiceBookingScreen";
import { PartsStoreScreen } from "./screens/PartsStoreScreen";
import { ProfileScreen } from "./screens/profile/ProfileScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4F46E5",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "DroneServe Pro" }}
            />
            <StackNavigator.Screen
                name="Services"
                component={DroneServiceList}
                options={{ title: "Drone Services" }}
            />
            <StackNavigator.Screen
                name="ServiceBooking"
                component={ServiceBookingScreen}
                options={{ title: "Book Service" }}
            />
            <StackNavigator.Screen
                name="PartsStore"
                component={PartsStoreScreen}
                options={{ title: "Parts Store" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "My Profile" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);