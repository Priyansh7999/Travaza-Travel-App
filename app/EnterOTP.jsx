import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useTheme } from '../Theme/ColorTheme'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../Theme/Colors';
import OTPInput from '../components/OTPInput';
const EnterOTP = () => {
    const colorScheme = useTheme();
    const [time, setTime] = useState(59);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <Ionicons name="arrow-back-outline" size={24} onPress={() => router.back()} color={colorScheme.text} />
            <View style={styles.header}>
                <Text style={[styles.title, { color: colorScheme.text }]}>Enter OTP Code</Text>
                <Text style={[styles.subtitle, { color: colorScheme.primary }]}>OTP code has been sent to your email</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/checkemail.png')} style={styles.image} />
            </View>
            <View style={styles.form}>
                <OTPInput />
                <View style={styles.resend}>
                    {
                        time === 0 ?
                            <Text disabled style={[styles.resend, { color: Colors.primary[700],  }]}>Resend OTP</Text>
                            :
                            <Text style={[styles.resend, { color: Colors.primary[700] }]}>Resend OTP in 00:{time}s</Text>
                    }
                    
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Button }]} onPress={() => router.push('/NewPassword')}>
                        <Text style={[styles.buttonText, { color: Colors.ButtonText }]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Lexend-Medium'
    },
    subtitle: {
        fontFamily: 'Lexend-Light'
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        color: 'white'
    },
    image: {
        width: 300,
        height: 300,
        color: 'white'
    },
    form: {
        flex: 1,
    },
    resend: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.primary[700],
        borderRadius: 15,
        padding: 15,
        width: '100%',
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'Lexend-Medium'
    },
})

export default EnterOTP;
