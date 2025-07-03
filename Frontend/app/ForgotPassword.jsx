import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../Theme/Colors';
import { useTheme } from '../Theme/ColorTheme';
import { router } from 'expo-router';
import { Image } from 'expo-image';
const ForgotPassword = () => {
    const colorScheme = useTheme();
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <Ionicons name="arrow-back-outline" size={24} onPress={() => router.back()} color={colorScheme.text} />
            <View style={styles.header}>
                <Text style={[styles.title, { color: colorScheme.text }]}>Forgot Password</Text>
                <Text style={[styles.subtitle, { color: colorScheme.primary }]}>Select which contact details you want to reset your password</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/forgetpassword.png')} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Ionicons name="mail-outline" size={24} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, { color: colorScheme.text }]} >Send OTP via Email</Text>
                        <TextInput
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Enter your email"
                            placeholderTextColor={Colors.textSecondary}
                            style={[styles.inputField, { color: colorScheme.text }]}
                        />
                    </View>
                </View>
                <Pressable style={styles.SubmitButton} onPress={() => router.push('/EnterOTP')}>
                    <Text style={styles.SubmitButtonText}>Send OTP</Text>
                    <Ionicons name="arrow-forward-outline" size={24} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
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
    buttonContainer: {
        width: '100%',
        flex: 1,
        gap: 20
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontFamily: 'Lexend',
        color: Colors.textSecondary

    },
    email: {
        fontFamily: 'Lexend-Light'
    },
    icon: {
        color: '#ccc',
        backgroundColor: Colors.primary[600],
        padding: 10,
        borderRadius: 15,
    },
    inputField: {
        fontFamily: 'Lexend-Light'
    },
    SubmitButton: {
        backgroundColor: Colors.Button,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubmitButtonText: {
        color: Colors.ButtonText,
        fontSize: 16,
        fontFamily: 'Lexend-Medium'
    },
})

export default ForgotPassword;
