import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../Theme/Colors';
const ForgotPassword = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subtitle}>Select which contact details you want to reset your password</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}>
                    <Ionicons name="mail-outline" size={24} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text} >Send OTP via Email</Text>
                        <Text style={styles.email}>priyansh7999@gamil.com</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.button}>
                    <Ionicons name="call-outline" size={24} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Send OTP via Phone</Text>
                        <Text style={styles.email}>1234567890</Text>
                    </View>
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
        color : Colors.textSecondary
        
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
})

export default ForgotPassword;
