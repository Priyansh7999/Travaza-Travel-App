import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { packages } from '../../data/Package';
import { useTheme } from '../../Theme/ColorTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SmallDestinationCard } from '../../components/SmallDestinationCard';
import Colors from '../../Theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
const TripReview = () => {
    const { id, dates, guests } = useLocalSearchParams();

    const parsedDates = dates ? JSON.parse(dates) : null;
    const parsedGuests = guests ? JSON.parse(guests) : null;
    const adults = parsedGuests?.adult || 1;
    const children = parsedGuests?.children||0;
    const place = packages.filter(p => p.id === Number(id));
    const price = packages.find(p => p.id === Number(id))?.price;
    const colorScheme = useTheme();

    const [guestDetails, setGuestDetails] = useState(
        Array(adults).fill(0).map(() => ({
            name: '',
            number: '',
            age: '',
            gender: 'Male',
        }))
    );

    const handleGuestChange = (index, field, value) => {
        const updatedGuests = [...guestDetails];
        updatedGuests[index][field] = value;
        setGuestDetails(updatedGuests);
    };
    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ]
    function handleSubmit() {
        console.log('Guest Details:', guestDetails);
        router.push({
            pathname: '/PaymentMethod',
            params: {
                guestDetails: JSON.stringify(guestDetails),
                price: ((adults + children) * Number(price)),
            }
        })
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={24} color={colorScheme.text} onPress={() => router.back()} />
                <Text style={[styles.title, { color: colorScheme.text }]}>Review Trip</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <SmallDestinationCard filteredRecommendations={place} type="package" />
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Trip Details</Text>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={[styles.name, { color: colorScheme.text }]}>Date</Text>
                        <Text style={[styles.name, { color: colorScheme.primary }]}>
                            {parsedDates?.startDate}     -     {parsedDates?.endDate}
                        </Text>
                        <Text style={[styles.name, { color: colorScheme.text }]}>Guests</Text>
                        <Text style={[styles.name, { color: colorScheme.primary }]}>
                            {parsedGuests?.adult} Adults, {parsedGuests?.children} Children, {parsedGuests?.infants} Infants
                        </Text>
                    </View>
                </View>
                <Text style={[styles.guestTitle, { color: colorScheme.text }]}>Please enter the details of each guest</Text>
                {guestDetails.map((guest, i) => (
                    <View key={i} style={styles.guestForm}>
                        <Text style={[styles.guestTitle, { color: colorScheme.text }]}>Guest {i + 1}</Text>
                        <View style={styles.form}>
                            <View style={styles.input}>
                                <Text style={[styles.label, { color: colorScheme.text }]}>Name</Text>
                                <TextInput
                                    onChangeText={text => handleGuestChange(i, 'name', text)}
                                    value={guest.name}
                                    placeholder={`Enter Guest ${i + 1} Name`}
                                    placeholderTextColor={Colors.textSecondary}
                                    style={[styles.inputField, { color: colorScheme.text }]}
                                />
                            </View>
                            <View style={styles.input}>
                                <Text style={[styles.label, { color: colorScheme.text }]}>Mobile Number</Text>
                                <TextInput
                                    onChangeText={text => handleGuestChange(i, 'number', text)}
                                    value={guest.number}
                                    placeholder={`Enter Guest ${i + 1} Mobile Number`}
                                    placeholderTextColor={Colors.textSecondary}
                                    style={[styles.inputField, { color: colorScheme.text }]}
                                    keyboardType="phone-pad"
                                />
                            </View>
                            <View style={styles.input}>
                                <Text style={[styles.label, { color: colorScheme.text }]}>Age</Text>
                                <TextInput
                                    onChangeText={text => handleGuestChange(i, 'age', text)}
                                    value={guest.age}
                                    placeholder={`Enter Guest ${i + 1} Age`}
                                    placeholderTextColor={Colors.textSecondary}
                                    style={[styles.inputField, { color: colorScheme.text }]}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.input}>
                                <Text style={[styles.label, { color: colorScheme.text }]}>Gender</Text>
                                <Dropdown
                                    data={genderOptions}
                                    labelField="label"
                                    valueField="value"
                                    value={guest.gender}
                                    onChange={item => handleGuestChange(i, 'gender', item.value)}
                                    placeholder="Select Gender"
                                    placeholderStyle={{ color: Colors.textSecondary }}
                                    selectedTextStyle={{ color: colorScheme.text, }}
                                    style={[styles.inputField, { color: colorScheme.text, fontFamily: 'Lexend-Medium' }]}
                                />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={[styles.footer, { backgroundColor: colorScheme.background }]}>
                <View style={styles.priceContainer}>
                    <Text style={[styles.priceLabel, { color: Colors.textSecondary }]}>Price</Text>
                    <Text style={[styles.priceValue, { color: colorScheme.text }]}>${(adults + children) * Number(price)}</Text>
                </View>
                <View style={styles.bookButton}>
                    <Pressable
                        style={[styles.bookNowButton, { backgroundColor: Colors.Button }]}
                        onPress={handleSubmit}
                    >
                        <Text style={[styles.bookNowButtonText]}>Confirm Booking</Text>
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    );
};

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
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Lexend-Bold'
    },
    name: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Lexend-Light'
    },

    guestForm: {
        marginTop: 20,
        borderWidth: 0.3,
        padding: 10,
        borderColor: Colors.textSecondary,
        borderRadius: 10,
        marginBottom: 10
    },
    guestTitle: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Lexend-Bold'
    },
    form: {
        padding: 10,
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
    footer: {
        padding: wp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.textSecondary,
    },
    priceContainer: {
        flexDirection: 'column',
        padding: hp('2%'),
    },
    priceLabel: {
        fontSize: wp('4.5%'),
        marginRight: 10,
        fontFamily: 'Lexend-Light',
    },
    priceValue: {
        fontSize: wp('6%'),
        fontFamily: 'Lexend-Medium',
    },
    bookButton: {
        padding: 10,
    },
    bookNowButton: {
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    bookNowButtonText: {
        color: Colors.ButtonText,
        fontFamily: 'Lexend-Medium',
        fontSize: 16,
        textAlign: 'center',
    },

});

export default TripReview;