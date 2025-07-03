import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import { router } from 'expo-router';
import Colors from '../../Theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const PrivacyPolicy = () => {
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={[styles.header]}>
                <Ionicons name="chevron-back" size={24} color={colorScheme.text} onPress={() => router.back()} />
                <Text style={[styles.title, { color: colorScheme.text }]}>Privacy Policy</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.update, { color: Colors.textSecondary }]}>Last update: 30 July, 2025</Text>
                <Text style={[styles.info, { color: colorScheme.text }]}>Please read these policies carefully before using our service.</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.titlepp, { color: colorScheme.primary }]}>Privacy Policy</Text>
                <Text style={[styles.detail, { color: colorScheme.text }]}>
                    Please note that the data shared with us shall be primarily processed in India and such other jurisdictions where a third party engaged by MMT may process the data on MMT’s behalf. By agreeing to this policy, you are providing us with your explicit consent to process your personal information for the purpose(s) defined in this policy. The data protection regulations in India or such other jurisdictions mentioned above may differ from those of your country of residence.
                </Text>
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
    textContainer: {
        marginBottom: 20,
    },
    update: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Lexend-Light'
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Lexend-Light'
    },
    titlepp: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Lexend-Medium',
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
        textAlign:'justify',
        fontFamily: 'Lexend-Light'
    },
    })

export default PrivacyPolicy;
