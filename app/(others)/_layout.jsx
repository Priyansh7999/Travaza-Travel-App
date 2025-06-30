import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="PlaceReview" />
            </Stack>            
        </>
    );
}

const styles = StyleSheet.create({})

export default Layout;
