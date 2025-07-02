import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Colors from '../Theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTheme } from '../Theme/ColorTheme';
import { Image } from 'expo-image';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>

            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/icon.png')} style={styles.logo} />
                    <Text style={[styles.logoTitle, { color: colorScheme.primary }]}>TRAVAZA</Text>
                </View>
                <Text style={[styles.title, { color: colorScheme.text }]}>Register your account</Text>
                <Text style={[styles.subtitle, { color: colorScheme.primary }]}>Enter your information below</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Name</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your name"
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
                <View style={styles.input}>
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
                    <Text style={[styles.label, { color: colorScheme.text }]}>Phone</Text>
                    <TextInput
                        onChangeText={setPhone}
                        value={phone}
                        placeholder="Enter your phone"
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
                <View style={styles.input}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Confirm Password</Text>
                    <TextInput
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Button }]}>
                        <Text style={[styles.buttonText, { color: Colors.ButtonText }]}>Register</Text>
                    </TouchableOpacity>
                    <Text style={[styles.subtitle, { color: colorScheme.text }]}>Already have an account? <Text style={styles.link} onPress={() => { router.push("/Signin") }}>Login</Text></Text>
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
        fontFamily: 'Lexend-Medium'
    },
    subtitle: {
        fontFamily: 'Lexend-Light'
    },
    form: {
        width: '100%',
        flex: 1,
        gap: 10
    },
    input: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
        fontFamily: 'Lexend'
    },
    inputField: {
        borderWidth: 0.3,
        borderColor: Colors.Button,
        borderRadius: 5,
        padding: 10,
        fontFamily: 'Lexend'
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
        fontFamily: 'Lexend-ExtraLight'
    },
    link: {
        color: Colors.primary[700],
        fontFamily: 'Lexend-Medium'
    }
})

export default Signup;
