import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Colors from '../Theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Checkbox from 'expo-checkbox';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Let's get you Login!</Text>
                <Text style={styles.subtitle}>Enter your information below</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your email"
                        placeholderTextColor={Colors.textSecondary}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter your password"
                        placeholderTextColor={Colors.textSecondary}
                        style={styles.inputField}
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
                        <Text>Remember me</Text>
                    </View>
                    <View style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText} onPress={() => { router.push("/ForgotPassword") }}>Forgot Password?</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.subtitle}>Don't have an account? <Text style={styles.link} onPress={() => { router.push("/Signup") }}>Register Now</Text></Text>
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
    title: {
        fontSize: 24,
        fontFamily: 'Lexend-Medium'
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
    forgotPassword: {
        alignItems: 'flex-end',
    },
    forgotPasswordText: {
        color: Colors.primary[700],
        fontFamily: 'Lexend-ExtraLight'
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
        fontFamily: 'Lexend-ExtraLight'
    }
})

export default Signin;
