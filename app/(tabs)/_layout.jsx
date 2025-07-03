import { AntDesign, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
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
                        },
                        tabBarActiveTintColor: colorScheme.primary,
                    }}
                >
                    <Tabs.Screen
                        name='HomePage'
                        options={{
                            title: 'Home',
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Octicons name="home" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='Discover'
                        options={{
                            title: '',
                            tabBarLabel: '',
                            tabBarIcon: ({ color, size }) => (
                                <View style={{backgroundColor: colorScheme.primary, width:80, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
                                <Octicons name="search" size={size} color={'white'} />
                                </View>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='Favourite'
                        options={{
                            href: null,
                            title: 'Favourite',
                            tabBarLabel: 'Favourite',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="favorite-outline" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='Profile'
                        options={{
                            title: 'Profile',
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="user" size={size} color={color} />
                            ),
                        }}
                    />
                </Tabs>
        </>

    );
}

export default Layout;
