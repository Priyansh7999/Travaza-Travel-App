import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import Colors from '../../Theme/Colors';
import { Image } from 'expo-image';
import { userData } from '../../data/UserData';
import { AntDesign, Feather, Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
const Profile = () => {
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: colorScheme.text }]}>My Profile</Text>
                <View style={styles.profileContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: userData.profileImage }} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.name, { color: colorScheme.text }]}>{userData.name}</Text>
                        <Text style={[styles.email, { color: colorScheme.text }]}>priyanshsaxena7999@gmail.com</Text>
                    </View>
                    <View style={styles.editButton}>
                        <Pressable style={styles.editIcon} onPress={() => router.push('/EditProfile')}>
                            <AntDesign name="edit" size={24} color={'white'} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.options} >
                <Pressable style={styles.option}>
                    <View style={styles.optionLeft}>
                        <MaterialIcons name="event-note" size={24} style={styles.icon} color={colorScheme.text} />
                        <Text style={[styles.optionText, { color: colorScheme.text }]}>My Bookings</Text>
                    </View>
                    <View style={styles.optionRight}>
                        <Ionicons name="chevron-forward" size={24} color={colorScheme.text} />
                    </View>
                </Pressable>
                <Pressable style={styles.option} onPress={() => router.push('/MyCard')}>
                    <View style={styles.optionLeft}>
                        <AntDesign name="creditcard" size={24} style={styles.icon} color={colorScheme.text} />
                        <Text style={[styles.optionText, { color: colorScheme.text }]}>My Cards</Text>
                    </View>
                    <View style={styles.optionRight}>
                        <Ionicons name="chevron-forward" size={24} color={colorScheme.text} />
                    </View>
                </Pressable>
                <Pressable style={styles.option}>
                    <View style={styles.optionLeft}>
                        <Feather name="settings" size={24} style={styles.icon} color={colorScheme.text}/>
                        <Text style={[styles.optionText, { color: colorScheme.text }]}>Settings</Text>
                    </View>
                    <View style={styles.optionRight}>
                        <Ionicons name="chevron-forward" size={24} color={colorScheme.text} />
                    </View>
                </Pressable>
                <Pressable style={styles.option} onPress={() => router.push('/PrivacyPolicy')}>
                    <View style={styles.optionLeft}>
                        <MaterialIcons name="verified-user" size={24} style={styles.icon} color={colorScheme.text} />
                        <Text style={[styles.optionText, { color: colorScheme.text }]}>Privacy Policy</Text>
                    </View>
                    <View style={styles.optionRight}>
                        <Ionicons name="chevron-forward" size={24} color={colorScheme.text} />
                    </View>
                </Pressable>
                <Pressable style={styles.option} onPress={() => router.push('/TermsCondition')}>
                    <View style={styles.optionLeft}>
                        <Foundation name="clipboard-notes" size={24} style={styles.icon} color={colorScheme.text} />
                        <Text style={[styles.optionText, { color: colorScheme.text }]}>Terms & Conditions</Text>
                    </View>
                    <View style={styles.optionRight}>
                        <Ionicons name="chevron-forward" size={24} color={colorScheme.text} />
                    </View>
                </Pressable>
                <Pressable style={styles.option}>
                    <View style={styles.optionLeft}>
                        <MaterialIcons name="logout" size={24} style={styles.icon} color="red" />
                        <Text style={[styles.optionText, { color: colorScheme.error }]}>Logout</Text>
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
        fontFamily: 'Lexend-Medium',
        marginBottom: 10
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.textSecondary,
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    name: {
        fontSize: 15,
        fontFamily: 'Lexend-Medium',
        marginBottom: 5,
    },
    email: {
        fontSize: 12,
        fontFamily: 'Lexend-Light',
    },
    editButton: {
        width: 40,
        height: 40,
        backgroundColor: Colors.primary[500],
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIcon: {
        color: 'white',
    },
    options: {
        flex: 1,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    icon: {
        fontSize: 24,
    },
    optionText: {
        fontSize: 18,
        fontFamily: 'Lexend-Light',
    },
    optionRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default Profile;
