import React, { use, useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useTheme } from '../../Theme/ColorTheme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../Theme/Colors';
import { userData } from '../../data/UserData';
import ModalSuccessfull from '../../components/ModalSuccessfull';
import { Image } from 'expo-image';

const MyCard = () => {
    const colorScheme = useTheme();
    const router = useRouter();
    const [cardNumber, setCardNumber] = useState(userData.card.cardNumber);
    const [holderName, setHolderName] = useState(userData.card.cardHolder);
    const [expiryDate, setExpiryDate] = useState(userData.card.expiryDate);
    const [cvv, setCVV] = useState(userData.card.cvv);
    const [saveCard, setSaveCard] = useState(false);
    const { id, guestDetails, price } = useLocalSearchParams();
    const [visible, setVisible] = useState(false);

    function handleSubmit() {
        setVisible(true);
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : -25}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <Ionicons name="chevron-back" size={24} color={colorScheme.text} onPress={() => router.back()} />
                        <Text style={[styles.title, { color: colorScheme.text }]}>My Card</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Saved Card</Text>
                        <View style={styles.cardDesign}>
                            <Image source={require('../../assets/images/creditcard.png')} style={styles.cardImage} />
                            <View style={[styles.cardLeft]}>
                                <View style={styles.cardText}>
                                    <Text style={styles.cardNumber}>
                                        {cardNumber.replace(/(.{4})/g, '$1 ').trim()}
                                    </Text>
                                    <View style={styles.cardHolderExpiry}>
                                        <Text style={styles.cardHolder}>{holderName}</Text>
                                        <Text style={styles.cardExpiry}>{expiryDate}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardRight}>
                                <View style={styles.cardIcon}>
                                    <Fontisto name="mastercard" size={24} color={colorScheme.text} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Card Details</Text>
                            <View style={styles.form}>
                                <View style={styles.input}>
                                    <Text style={[styles.label, { color: colorScheme.text }]}>Card Number</Text>

                                    <TextInput
                                        value={cardNumber}
                                        onChangeText={setCardNumber}
                                        placeholder="Enter Card Number"
                                        placeholderTextColor={Colors.textSecondary}
                                        style={[styles.inputField, { color: colorScheme.text, borderColor: colorScheme.border || Colors.border }]}
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.input}>
                                    <Text style={[styles.label, { color: colorScheme.text }]}>Card Holder Name</Text>
                                    <TextInput
                                        onChangeText={setHolderName}
                                        value={holderName}
                                        placeholder="Enter holder name"
                                        placeholderTextColor={Colors.textSecondary}
                                        style={[styles.inputField, { color: colorScheme.text, borderColor: colorScheme.border || Colors.border }]}
                                    />
                                </View>
                                <View style={styles.inputRow}>
                                    <View style={[styles.input, styles.halfInput]}>
                                        <Text style={[styles.label, { color: colorScheme.text }]}>Expiry Date</Text>
                                        <TextInput
                                            onChangeText={setExpiryDate}
                                            value={expiryDate}
                                            placeholder="MM/YY"
                                            placeholderTextColor={Colors.textSecondary}
                                            style={[styles.inputField, { color: colorScheme.text, borderColor: colorScheme.border || Colors.border }]}
                                            keyboardType="numeric"
                                            maxLength={5}
                                        />
                                    </View>
                                    <View style={[styles.input, styles.halfInput]}>
                                        <Text style={[styles.label, { color: colorScheme.text }]}>CVV</Text>
                                        <TextInput
                                            onChangeText={setCVV}
                                            value={cvv}
                                            placeholder="CVV"
                                            placeholderTextColor={Colors.textSecondary}
                                            style={[styles.inputField, { color: colorScheme.text, borderColor: colorScheme.border || Colors.border }]}
                                            keyboardType="numeric"
                                            maxLength={4}
                                            secureTextEntry
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bookButton}>
                            <Pressable
                                style={[styles.bookNowButton, { backgroundColor: Colors.Button }]}
                                onPress={handleSubmit}
                            >
                                <Text style={[styles.bookNowButtonText, { color: Colors.ButtonText }]}>
                                    Update Card
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <ModalSuccessfull
                        visible={visible}
                        setVisible={setVisible}
                        title="Card Updated Successfully"
                        image={require('../../assets/images/passwordreset.png')}
                        onPress={() => router.back()}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
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
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Lexend-Medium',
        marginBottom: 10,
        marginTop: 20,
    },
    cardDesign: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.textSecondary,
        borderRadius: 15,
        marginBottom: 10,
        width: '100%',
        height: '25%',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 15,
    },
    cardLeft: {
        width: '80%',
        height: '100%',
        justifyContent: 'space-between',
        padding: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        position: 'relative',
    },
    cardText: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        right: 0,
        justifyContent: 'space-between',
        gap: 10,
        padding: 10
    },
    cardNumber: {
        color: 'black',
        fontSize: 16,
        fontFamily:'Lexend-Medium',
        letterSpacing: 2,
        textAlign: 'center',
    },
    cardHolderExpiry: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardHolder: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'Lexend',
        textAlign: 'left',
    },
    cardExpiry: {
        color: 'yellow',
        fontSize: 12,
        fontFamily: 'Lexend',
        textAlign: 'right',
    },
    cardDetails: {
        marginTop: 5,
    },
    cardRight:{
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIcon: {
        position: 'absolute',
        right: 10,
        top: 20,
    },
    form: {
        padding: 10,
    },
    input: {
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    halfInput: {
        flex: 1,
    },
    label: {
        marginBottom: 5,
        fontFamily: 'Lexend',
        fontSize: 14,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontFamily: 'Lexend',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxText: {
        fontFamily: 'Lexend',
        fontSize: 14,
        flex: 1,
    },
    bookNowButton: {
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    bookNowButtonText: {
        fontFamily: 'Lexend-Medium',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MyCard;
