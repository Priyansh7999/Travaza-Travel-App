import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import Colors from '../../Theme/Colors';
import { StatusBar } from 'expo-status-bar';
const Layout = () => {
    const colorScheme = useTheme();
    return (
        <>
            <StatusBar style="auto" />
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: colorScheme.background,
                            borderTopWidth: 0.2,
                            borderTopColor: Colors.border,
                            height: 70,
                        },
                        tabBarLabelStyle: {
                            fontFamily: 'Lexend-Medium',
                            fontSize: 12,
                        }
                    }}
                >
                    <Tabs.Screen
                        name='HomePage'
                        options={{
                            title: 'Home',
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='Discover'
                        options={{
                            title: 'Discover',
                            tabBarLabel: 'Discover',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="search" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='Favourite'
                        options={{
                            title: 'Favourite',
                            tabBarLabel: 'Favourite',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="heart" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='Profile'
                        options={{
                            title: 'Profile',
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="person" size={size} color={color} />
                            ),
                        }}
                    />
                </Tabs>
        </>

    );
}

export default Layout;
