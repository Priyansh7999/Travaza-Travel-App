import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Checkbox from 'expo-checkbox';
import Colors from '../Theme/Colors';
import { useTheme } from '../Theme/ColorTheme';
import { Image } from 'expo-image';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/icon.png')} style={styles.logo} />
                    <Text style={[styles.logoTitle, { color: colorScheme.primary }]}>TRAVAZA</Text>
                </View>
                
                <Text style={[styles.title, { color: colorScheme.text }]}>Let's get you Login!</Text>
                <Text style={[styles.subtitle, { color: colorScheme.primary }]}>Enter your information below</Text>
            </View>
            <View style={styles.form}>
                <View style={[styles.input]}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Email</Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your email"
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Password</Text>
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter your password"
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxRow}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.checkboxText, { color: colorScheme.text }]}>Remember me</Text>
                    </View>
                    <View style={styles.forgotPassword}>
                        <Text style={[styles.forgotPasswordText, { color: colorScheme.text }]} onPress={() => { router.push("/ForgotPassword") }}>Forgot Password?</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Button }]} onPress={() => { router.push("/HomePage") }}>
                        <Text style={[styles.buttonText, { color: Colors.ButtonText }]}>Login</Text>
                    </TouchableOpacity>
                    <Text style={[styles.subtitle, { color: colorScheme.text }]}>Don't have an account? <Text style={styles.link} onPress={() => { router.push("/Signup") }}>Register Now</Text></Text>
                </View>
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
    logoContainer: {
        marginBottom: 10,
    },
    logo: {
        width: 110,
        height: 76,
    },
    logoTitle: {
         fontSize: 15,
        marginBottom: 15,
        marginLeft: 20,
        fontFamily: 'Lexend-Medium'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Lexend-Medium',
    },
    subtitle: {
        fontFamily: 'Lexend-Light'
    },
    form: {
        width: '100%',
        flex: 1,
        gap: 20
    },
    input: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
        fontFamily: 'Lexend'
    },
    inputField: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 5,
        padding: 10,
        fontFamily: 'Lexend'
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxText: {
        fontFamily: 'Lexend-ExtraLight'
    },
    forgotPassword: {
        alignItems: 'flex-end',
    },
    forgotPasswordText: {
        color: Colors.primary[700],
        fontFamily: 'Lexend-Medium'
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
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
        fontFamily: 'Lexend-ExtraLight'
    },
    link: {
        color: Colors.primary[700],
        fontFamily: 'Lexend-Medium'
    }
})

export default Signin;
