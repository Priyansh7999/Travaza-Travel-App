import { router, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, ScrollView, Pressable, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native';
import { popularDestinations } from '../../data/PopularDestinations';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../Theme/ColorTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Colors from '../../Theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Description = ({ colorScheme, place }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.descriptionContainer}>
            <Text
                style={[styles.description, { color: colorScheme.text }]}
                numberOfLines={expanded ? null : 5}
            >
                {place.description}
            </Text>
            {place.description.split(' ').length > 30 && (
                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text style={{ color: colorScheme.primary }}>
                        {expanded ? 'Read less' : 'Read more'}
                    </Text>
                </TouchableOpacity>
            )}
            <View style={styles.locationContainer}>
                <Text style={[styles.location, { color: colorScheme.text }]}>Location</Text>
            </View>
        </View>
    );
};
const Photo = ({ colorScheme, place }) => {
    return (
        <View style={styles.photoContainer}>
            {
                place?.photos.map((photo, index) => (
                    <Image
                        key={index}
                        source={{ uri: photo }}
                        style={styles.photo}
                    />
                ))
            }
        </View>
    )
}
const Reviews = ({ colorScheme, place }) => {
    return (
        <View style={styles.reviewsContainer}>
            {
                place.reviews.map((review, index) => (
                    <View key={index} style={styles.reviewItem}>
                        <View style={styles.reviewHeader}>
                            <View style={styles.reviewProfileContainer}>
                                <Image source={{ uri: review.profileImage }} style={styles.reviewProfile} />
                                <View style={styles.reviewNameContainer}>
                                    <Text style={[styles.reviewName, { color: colorScheme.text }]}>{review.name}</Text>
                                    <Text style={[styles.reviewDate, { color: Colors.gray }]}>{review.date}</Text>
                                </View>
                            </View>
                            <View style={styles.reviewRatingContainer}>
                                <Text style={[styles.reviewRating, { color: colorScheme.text }]}>⭐{review.rating}</Text>
                            </View>
                        </View>
                        <Text style={[styles.reviewText, { color: colorScheme.text }]}>{review.review}</Text>
                    </View>
                ))
            }
        </View>
    )
}
const SegmentedControlTab = ({ colorScheme, place }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Description', 'Photo', 'Reviews'];
    return (
        <View style={styles.segmentedContainer}>
            <View style={[styles.segmentedControl, { backgroundColor: colorScheme.background, borderColor: colorScheme.primary }]}>
                {tabs.map((tab, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.segment,
                            activeTab === index && { backgroundColor: colorScheme.primary }
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
                {
                    tabs[activeTab] === 'Description' && <Description colorScheme={colorScheme} place={place} />
                }
                {
                    tabs[activeTab] === 'Photo' && <Photo colorScheme={colorScheme} place={place} />
                }
                {
                    tabs[activeTab] === 'Reviews' && <Reviews colorScheme={colorScheme} place={place} />
                }
            </View>
        </View>
    );
};

export default function PlaceReview() {
    const { id } = useLocalSearchParams();
    const place = popularDestinations.find(p => p.id === Number(id));
    const colorScheme = useTheme();
    const [liked, setLiked] = useState(false);
    const [viewType, setViewType] = useState('segmented');

    const handleLike = () => {
        setLiked(!liked);
    }

    if (!place) {
        return <Text>Place not found</Text>;
    }
    return (
        <>
            <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back-outline" size={24} onPress={() => router.back()} color={colorScheme.text} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Pressable style={styles.icon} onPress={handleLike}>
                            {liked ? (
                                <Ionicons name="heart" size={24} color="red" />
                            ) : (
                                <Ionicons name="heart-outline" size={24} color={colorScheme.text} />
                            )}
                        </Pressable>
                        <Ionicons name="share-outline" size={24} color={colorScheme.text} />
                    </View>
                </View>

                <ScrollView style={[styles.container, { backgroundColor: colorScheme.background }]}>
                    <Image source={{ uri: place.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.recommendationName, { color: colorScheme.text }]}>{place.destination}</Text>
                            <Text style={[styles.recommendationPrice, { color: colorScheme.text }]}>
                                <Text style={[styles.price, { color: colorScheme.primary }]}>{place.price}</Text>/person
                            </Text>
                        </View>
                        <Text style={[styles.recommendationLocation, { color: colorScheme.text }]}>
                            <Ionicons name="location" size={16} color={colorScheme.text} /> {place.place}
                        </Text>
                        <Text style={[styles.recommendationRating, { color: colorScheme.text }]}>
                            ⭐ {place.rating} ({place.TotalReview} Reviews)
                        </Text>
                    </View>
                    <SegmentedControlTab colorScheme={colorScheme} place={place} />;
                </ScrollView>
            </SafeAreaView>
            <View style={[styles.footer, { backgroundColor: colorScheme.background }]}>
                <View style={styles.priceContainer}>
                    <Text style={[styles.priceLabel, { color: Colors.textSecondary }]}>Price</Text>
                    <Text style={[styles.priceValue, { color: colorScheme.text }]}>{place.price}</Text>
                </View>
                <View style={styles.bookButton}>
                    <Pressable style={[styles.bookNowButton, { backgroundColor: colorScheme.primary }]}>
                        <Text style={[styles.bookNowButtonText, { color: colorScheme.text }]}>Book Now</Text>
                    </Pressable>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        padding: 10,
        marginBottom: hp('15%'),
        borderRadius: 10,
    },
    descriptionContainer: {
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    description: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
        textAlign: 'justify',
    },
    locationContainer: {
        marginTop: hp('1.5%'),
    },
    location: {
        fontSize: wp('5.5%'),
        fontFamily: 'Lexend-Bold',
    },
    photoContainer: {
        marginTop: hp('1.5%'),
    },
    photo: {
        width: '20%',
        height: "10%",
        borderRadius: 10,
        marginBottom: hp('2%'),
    },


    reviewsContainer: {
        marginTop: hp('1.5%'),
    },
    reviewItem: {
        marginBottom: hp('2%'),
        borderBottomWidth: 1,
        borderBottomColor: Colors.textSecondary
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewNameContainer: {
        flexDirection: 'column',
    },
    reviewName: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Medium',
    },
    reviewDate: {
        fontSize: wp('3.5%'),
        fontFamily: 'Lexend-Light',
    },
    reviewRatingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewRating: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
    },
    reviewText: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Medium',
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
        borderBlockColor: Colors.textSecondary
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
    },
    bookNowButtonText: {
        color: Colors.ButtonText,
        fontFamily: 'Lexend-Medium',
        fontSize: 16,
        textAlign: 'center',
    },
});