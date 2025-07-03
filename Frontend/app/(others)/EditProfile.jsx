import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../Theme/ColorTheme';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { userData } from '../../data/UserData';
import Colors from '../../Theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
const EditProfile = () => {
    const colorScheme = useTheme();
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={[styles.header]}>
                <Ionicons name="chevron-back" size={24} color={colorScheme.text} onPress={() => router.back()}/>
                <Text style={[styles.title, { color: colorScheme.text }]}>Edit Profile</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: userData.profileImage }} style={styles.image} />
            </View>
            <View style={styles.form}>
                <View style={[styles.input]}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Name</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
                <View style={[styles.input]}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Email</Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={[styles.label, { color: colorScheme.text }]}>Password</Text>
                    <TextInput
                        onChangeText={setPhone}
                        value={phone}
                        placeholderTextColor={Colors.textSecondary}
                        style={[styles.inputField, { color: colorScheme.text }]}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Button }]} onPress={() => {  ToastAndroid.show('Profile Updated', ToastAndroid.SHORT); router.back() }}>
                    <Text style={[styles.buttonText, { color: Colors.ButtonText }]}>Update</Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 10
    },
    title: {
        fontSize: 24,
        width: '80%',
        fontFamily: 'Lexend-Medium',
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
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
})

export default EditProfile;
