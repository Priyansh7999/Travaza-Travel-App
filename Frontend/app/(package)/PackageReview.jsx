import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Description } from '../../components/Description';
import ReviewsList from '../../components/ReviewsList';
import { SmallDestinationCard } from '../../components/SmallDestinationCard';
import { packages } from '../../data/Package';
import { popularDestinations } from '../../data/PopularDestinations';
import Colors from '../../Theme/Colors';
import { useTheme } from '../../Theme/ColorTheme';
import SelectDate from './SelectDate';
import GuestSelection from './GuestSelection';

const PlaceReview = ({ place }) => {
    const filterList = popularDestinations.filter((item) => item.state === place.state);
    return (
        <View>
            <SmallDestinationCard filteredRecommendations={filterList} />
        </View>
    );

}

const SegmentedControlTab = ({ colorScheme, place }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Description', 'Places', 'Reviews'];
    return (
        <View style={styles.segmentedContainer}>
            <View style={[styles.segmentedControl, { backgroundColor: colorScheme.background, borderColor: colorScheme.primary }]}>
                {tabs.map((tab, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.segment,
                            activeTab === index && { backgroundColor: Colors.Button }
                        ]}
                        onPress={() => setActiveTab(index)}
                    >
                        <Text style={[
                            styles.segmentText,
                            { color: activeTab === index ? '#fff' : colorScheme.text }
                        ]}>
                            {tab}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <View style={styles.tabContent}>
                {activeTab === 0 && <Description colorScheme={colorScheme} place={place} />}
                {activeTab === 1 && <PlaceReview colorScheme={colorScheme} place={place} />}
                {activeTab === 2 && <ReviewsList colorScheme={colorScheme} place={place} />}
            </View>
        </View>
    );
};


const PackageReview = () => {
    const { id } = useLocalSearchParams();
    const place = packages.find(p => p.id === Number(id));
    const colorScheme = useTheme();
    const [liked, setLiked] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [guestModalVisible, setGuestModalVisible] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedGuests, setSelectedGuests] = useState(null);

    const handleDateSelect = (dates) => {
        setSelectedDates(dates);
        setDateModalVisible(false);
        setTimeout(() => setGuestModalVisible(true), 300);
    };

    const handleGuestSelect = (guests) => {
        setSelectedGuests(guests);
        setGuestModalVisible(false);
        router.push({
            pathname: '/TripReview',
            params: {
                id: place.id,
                dates: JSON.stringify(selectedDates), 
                guests: JSON.stringify(guests) 
            },
        });
    };
    const handleGuestClose = () => {
        setGuestModalVisible(false);
    };

    const handleLike = () => {
        setLiked(!liked);
    }

    if (!place) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: colorScheme?.background || '#fff' }]}>
                <Text style={{ color: colorScheme?.text || '#000' }}>Place not found</Text>
            </SafeAreaView>
        );
    }

    return (
        <>
            <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                        <Ionicons name="arrow-back-outline" size={24} color={colorScheme.text} />
                    </Pressable>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Pressable style={styles.icon} onPress={handleLike}>
                            {liked ? (
                                <Ionicons name="heart" size={24} color="red" />
                            ) : (
                                <Ionicons name="heart-outline" size={24} color={colorScheme.text} />
                            )}
                        </Pressable>
                        <Pressable>
                            <Ionicons name="share-outline" size={24} color={colorScheme.text} />
                        </Pressable>
                    </View>
                </View>
                <ScrollView style={[styles.scrollView, { backgroundColor: colorScheme.background }]}>
                    <Image source={{ uri: place.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.recommendationName, { color: colorScheme.text }]}>{place.name}</Text>
                            <Text style={[styles.recommendationPrice, { color: colorScheme.text }]}>
                                <Text style={[styles.price, { color: colorScheme.primary }]}>${place.price}</Text>/person
                            </Text>
                        </View>
                        <Text style={[styles.recommendationLocation, { color: colorScheme.text }]}>
                            <Ionicons name="location" size={16} color={colorScheme.text} /> {place.state}, {place.country}
                        </Text>
                        <Text style={[styles.recommendationRating, { color: colorScheme.text }]}>
                            ⭐ {place.rating} ({place.TotalReview} Reviews)
                        </Text>
                    </View>
                    <SegmentedControlTab colorScheme={colorScheme} place={place} />
                </ScrollView>
            </SafeAreaView>
            <View style={[styles.footer, { backgroundColor: colorScheme.background }]}>
                <View style={styles.priceContainer}>
                    <Text style={[styles.priceLabel, { color: Colors.textSecondary }]}>Price</Text>
                    <Text style={[styles.priceValue, { color: colorScheme.text }]}>{place.price}</Text>
                </View>
                <View style={styles.bookButton}>
                    <Pressable
                        style={[styles.bookNowButton]}
                        onPress={() => setDateModalVisible(true)}
                    >
                        <Text style={[styles.bookNowButtonText]}>Book Now</Text>
                    </Pressable>
                    <SelectDate
                        visible={dateModalVisible}
                        onClose={() => setDateModalVisible(false)}
                        onSelect={handleDateSelect}
                    />
                    <GuestSelection
                        visible={guestModalVisible}
                        onClose={handleGuestClose}
                        onSelect={handleGuestSelect}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%',
        height: '100%',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: hp('35%'),
        borderRadius: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    recommendationName: {
        fontSize: wp('5.5%'),
        fontFamily: 'Lexend-Medium',
    },
    recommendationPrice: {
        fontSize: wp('4%'),
        fontFamily: 'Lexend-Light',
    },
    price: {
        fontSize: wp('5.5%'),
        fontFamily: 'Lexend-Medium',
    },
    icon: {
        fontSize: 20,
    },
    recommendationLocation: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
    },
    recommendationRating: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
    },
    segmentedContainer: {
        marginTop: hp('2%'),
    },
    segmentedControl: {
        flexDirection: 'row',
        borderRadius: 25,
        borderWidth: 1,
        marginBottom: hp('2%'),
        overflow: 'hidden',
    },
    segment: {
        flex: 1,
        paddingVertical: hp('1.5%'),
        alignItems: 'center',
    },
    segmentText: {
        fontSize: 14,
        fontFamily: 'Lexend-Medium',
    },
    tabContent: {
        flex: 1,
        paddingVertical: 10,
        marginBottom: hp('15%'),
        borderRadius: 10,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: wp('3%'),
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
        paddingHorizontal: 50,
        backgroundColor: Colors.Button
    },
    bookNowButtonText: {
        color: Colors.ButtonText,
        fontFamily: 'Lexend-Medium',
        fontSize: 16,
        textAlign: 'center',
    },
});
export default PackageReview;