import { Image } from 'expo-image';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Alert, StyleSheet, ToastAndroid, View, TextInput } from 'react-native';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ReviewsList = ({ place }) => {
    const colorScheme = useTheme();
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    
    const handleStarPress = (rating) => {
        setSelectedRating(rating);
    };
    
    const handleSubmitReview = () => {
        if (selectedRating === 0) {
            Alert.alert('Rating Required', 'Please select a star rating before submitting your review.');
            return;
        }
        if (reviewText.trim() === '') {
            Alert.alert('Review Required', 'Please write a review before submitting.');
            return;
        }
        const newReview = {
            name: 'Priyansh Saxena',
            rating: selectedRating,
            review: reviewText,
            date: new Date().toLocaleDateString(),
            profileImage: "https://hblimg.mmtcdn.com/content/hubble/img/dest/image.jpg"
        };

        console.log('New Review:', newReview);
        ToastAndroid.show('Review submitted successfully!', ToastAndroid.SHORT);
        setSelectedRating(0);
        setReviewText('');
    };

    const renderStars = (isInteractive = false) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity
                    key={i}
                    onPress={isInteractive ? () => handleStarPress(i) : null}
                    disabled={!isInteractive}
                    style={{ marginRight: 2 }}
                >
                    <Text style={[styles.reviewRating, {
                        color: i <= selectedRating ? '#FFD700' : colorScheme.text,
                        opacity: isInteractive && i <= selectedRating ? 1 : 0.5
                    }]}>
                        ⭐
                    </Text>
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.reviewsContainer}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={styles.addReviewContainer}>
                    <View style={styles.reviewHeader}>
                        <View style={styles.reviewProfileContainer}>
                            <Image
                                source={{ uri: "https://hblimg.mmtcdn.com/content/hubble/img/dest/image.jpg" }}
                                style={styles.reviewProfile}
                            />
                            <View style={styles.reviewNameContainer}>
                                <Text style={[styles.reviewName, { color: colorScheme.text }]}>Priyansh Saxena</Text>
                                <Text style={[styles.reviewDate, { color: Colors.gray[50] }]}>Add your review</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.starRatingContainer}>
                        <Text style={[styles.ratingLabel, { color: colorScheme.text }]}>Rate this trip: </Text>
                        <View style={styles.starRating}>
                            {renderStars(true)}
                        </View>
                    </View>

                    {/* Review Input */}
                    <View style={styles.reviewInputContainer}>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            placeholder="Write your review..."
                            placeholderTextColor={Colors.textSecondary}
                            style={[styles.reviewInput, {
                                color: colorScheme.text,
                                borderColor: colorScheme.text + '30'
                            }]}
                            value={reviewText}
                            onChangeText={setReviewText}
                            textAlignVertical="top"
                            scrollEnabled={true}
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={[styles.submitButton, {
                            backgroundColor: selectedRating > 0 && reviewText.trim() !== ''
                                ? colorScheme.primary || '#007AFF'
                                : Colors.gray[50],
                            opacity: selectedRating > 0 && reviewText.trim() !== '' ? 1 : 0.6
                        }]}
                        onPress={handleSubmitReview}
                        disabled={selectedRating === 0 || reviewText.trim() === ''}
                    >
                        <Text style={styles.submitButtonText}>Submit Review</Text>
                    </TouchableOpacity>
                </View>

                {/* Existing Reviews */}
                <Text style={[styles.reviewsTitle, { color: colorScheme.primary }]}>Reviews</Text>
                {place.reviews.map((review, index) => (
                    <View key={index} style={styles.reviewItem}>
                        <View style={styles.reviewHeader}>
                            <View style={styles.reviewProfileContainer}>
                                <Image source={{ uri: review.profileImage }} style={styles.reviewProfile} />
                                <View style={styles.reviewNameContainer}>
                                    <Text style={[styles.reviewName, { color: colorScheme.text }]}>{review.name}</Text>
                                    <Text style={[styles.reviewDate, { color: Colors.gray[50] }]}>{review.date}</Text>
                                </View>
                            </View>
                            <View style={styles.reviewRatingContainer}>
                                <Text style={[styles.reviewRating, { color: colorScheme.text }]}>⭐{review.rating}</Text>
                            </View>
                        </View>
                        <Text style={[styles.reviewText, { color: colorScheme.text }]}>{review.review}</Text>
                    </View>
                ))}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    reviewsContainer: {
        marginVertical: hp('1.5%'),
    },
    addReviewContainer: {
        marginBottom: hp('3%'),
        paddingBottom: hp('2%'),
        borderBottomWidth: 2,
        borderBottomColor: Colors.gray[30],
    },
    reviewItem: {
        marginBottom: hp('2%'),
        paddingBottom: hp('3%'),
        borderBottomWidth: 1,
        borderBottomColor: Colors.textSecondary
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    reviewProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    reviewNameContainer: {
        flexDirection: 'column',
        gap: 2
    },
    reviewProfile: {
        width: wp('10%'),
        height: hp("5%"),
        borderRadius: 50,
    },
    reviewName: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Medium',
    },
    reviewDate: {
        fontSize: wp('3.5%'),
        fontFamily: 'Lexend-Light',
    },
    reviewRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewRating: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
    },
    reviewText: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
        marginTop: 5,
    },
    reviewsTitle: {
        fontSize: wp('5.5%'),
        fontFamily: 'Lexend-Medium',
        marginBottom: hp('2%'),
        textAlign: 'center'
    },
    starRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'),
    },
    ratingLabel: {
        fontSize: wp('4%'),
        fontFamily: 'Lexend-Medium',
        marginRight: 10,
    },
    starRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewInputContainer: {
        marginBottom: hp('2%'),
    },
    reviewInput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        fontSize: wp('4%'),
        fontFamily: 'Lexend-Regular',
        minHeight: hp('12%'),
    },
    submitButton: {
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('8%'),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Medium',
    },
})

export default ReviewsList;
