import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Colors from '../Theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
const Signup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Register your account</Text>
                <Text style={styles.subtitle}>Enter your information below</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your name"
                        placeholderTextColor={Colors.textSecondary}
                        style={styles.inputField}
                    />
                </View>
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
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        onChangeText={setPhone}
                        value={phone}
                        placeholder="Enter your phone"
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
                <View style={styles.input}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        placeholderTextColor={Colors.textSecondary}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={styles.subtitle}>Already have an account? <Text style={styles.link} onPress={() => {router.push("/Signin")}}>Login</Text></Text>
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
    title:{
        fontSize: 24,
        fontFamily:'Lexend-Medium'
    },
    subtitle:{
        fontFamily:'Lexend-Light'
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
        fontFamily:'Lexend'
    },
    inputField: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 5,
        padding: 10,
        fontFamily:'Lexend'
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
        fontFamily:'Lexend-ExtraLight'
    },
    link: {
        color: Colors.primary[700],
        fontFamily:'Lexend-ExtraLight'
    }
})

export default Signup;
