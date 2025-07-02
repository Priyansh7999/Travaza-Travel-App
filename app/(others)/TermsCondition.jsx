import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import { router } from 'expo-router';
import Colors from '../../Theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';


const TermsCondition = () => {
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={[styles.header]}>
                <Ionicons name="chevron-back" size={24} color={colorScheme.text} onPress={() => router.back()} />
                <Text style={[styles.title, { color: colorScheme.text }]}>Terms & Conditions</Text>
            </View>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={[styles.update, { color: Colors.textSecondary }]}>Last update: 30 July, 2025</Text>
                    <Text style={[styles.info, { color: colorScheme.text }]}>Please read these terms and conditions carefully before using our service.</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.titlepp, { color: colorScheme.primary }]}>Conditions of Users</Text>
                    <Text style={[styles.detail, { color: colorScheme.text }]}>
                        This User Agreement along with Terms Of Service (collectively, the "User Agreement") forms the terms and conditions for the use of services and products of MakeMyTrip (India) Private Limited ("MMT").
                    </Text>
                    <Text style={[styles.detail, { color: colorScheme.text }]}>
                        Any person ("User") who inquiries about or purchases any products or services of MMT India (i.e., where country/region selected is India) through its websites, mobile applications, sales persons, offices, call centers, branch offices, franchisees, agents etc. (all the aforesaid platforms collectively referred to as "Sales Channels") agree to be governed by this User Agreement.
                    </Text>
                    <Text style={[styles.detail, { color: colorScheme.text }]}>
                        The websites and the mobile applications of MMT are collectively referred to as 'Website'. Both User and MMT are individually referred to as 'Party' and collectively referred to as 'Parties' to the User Agreement. "Terms of Service" available on MMT's website details out terms & conditions applicable on various services or products facilitated by MMT. The User should refer to the relevant Terms of Service applicable for the given product or service as booked by the User. Such Terms of Service are binding on the User.
                    </Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 17,
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
        textAlign: 'justify',
        fontFamily: 'Lexend-Light'
    },
})

export default TermsCondition;
