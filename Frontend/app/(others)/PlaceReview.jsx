import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { popularDestinations } from '../../data/PopularDestinations';
import Colors from '../../Theme/Colors';
import { useTheme } from '../../Theme/ColorTheme';
import { Description } from '../../components/Description';
import ReviewsList from '../../components/ReviewsList';



const Photo = ({ colorScheme, place }) => {
    return (
        <View style={styles.photoContainer}>
            {
                place.photos.map((photo, index) => (
                    <Image key={index} source={{ uri: photo.image }} style={styles.photo} />
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
                {activeTab === 0 && <Description colorScheme={colorScheme} place={place} />}
                {activeTab === 1 && <Photo colorScheme={colorScheme} place={place} />}
                {activeTab === 2 && <ReviewsList colorScheme={colorScheme} place={place} />}
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
                            <Text style={[styles.recommendationName, { color: colorScheme.text }]}>{place.destination}</Text>
                        </View>
                        <Text style={[styles.recommendationLocation, { color: colorScheme.text }]}>
                            <Ionicons name="location" size={16} color={colorScheme.text} /> {place.place}
                        </Text>
                        <Text style={[styles.recommendationRating, { color: colorScheme.text }]}>
                            ⭐ {place.rating} ({place.TotalReview} Reviews)
                        </Text>
                    </View>
                    <SegmentedControlTab colorScheme={colorScheme} place={place} />
                </ScrollView>
            </SafeAreaView>
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
        padding: 10,
        marginBottom: hp('15%'),
        borderRadius: 10,
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Add this here
    },

    photoRow: {
        justifyContent: 'space-between',
    },
    photo: {
        width: wp('28%'),
        height: hp('15%'),
        borderRadius: 10,
        marginBottom: 10,
    },
});