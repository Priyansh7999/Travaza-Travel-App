import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../Theme/Colors';
import { useTheme } from '../Theme/ColorTheme';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import ModalSuccessfull from '../components/ModalSuccessfull';
const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <Ionicons name="arrow-back-outline" size={24} onPress={() => router.back()} color={colorScheme.text} />
            <View style={styles.header}>
                <Text style={[styles.title, { color: colorScheme.text }]}>Enter New Password</Text>
                <Text style={[styles.subtitle, { color: colorScheme.primary }]}>Please enter your new password</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/newpassword.png')} style={styles.image} />
            </View>
            <View style={styles.form}>
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
                    <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Button }]} onPress={() => setVisible(true)}>
                        <Text style={[styles.buttonText, { color: Colors.ButtonText }]}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <ModalSuccessfull visible={visible} setVisible={setVisible} title="Password reset successfully" image={require('../assets/images/passwordreset.png')} onPress={() => router.replace('/Signin')} />
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
    form: {
        width: '100%',
        flex: 1,
        gap: 10
    },
    input: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 2,
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
        fontFamily: 'Lexend-Medium'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: 250,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
    },
    modalImage: {
        width: 200,
        height: 200,
    },
})

export default NewPassword;
